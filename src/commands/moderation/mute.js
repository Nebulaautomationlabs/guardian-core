const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('mute')
        .setDescription('Mute a user in the server')
        .addUserOption(option => option.setName('target').setDescription('The user to mute').setRequired(true))
        .addStringOption(option => option.setName('reason').setDescription('Reason for muting')),
    async execute(interaction) {
        const target = interaction.options.getUser('target');
        const reason = interaction.options.getString('reason') || 'No reason provided';

        if (!interaction.member.permissions.has('MUTE_MEMBERS')) {
            return interaction.reply({ content: '❌ You do not have permission to mute members.', ephemeral: true });
        }

        const member = await interaction.guild.members.fetch(target.id).catch(() => null);
        if (member) {
            try {
                await member.voice.setMute(true, reason);
                return interaction.reply(`✅ Successfully muted **${target.tag}** for: ${reason}`);
            } catch (err) {
                return interaction.reply({ content: '❌ I was unable to mute this member. Please check my permissions!', ephemeral: true });
            }
        } else {
            return interaction.reply({ content: '❌ User not found!', ephemeral: true });
        }
    },
};
