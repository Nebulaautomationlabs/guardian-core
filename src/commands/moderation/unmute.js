const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('unmute')
        .setDescription('Unmute a user in the server')
        .addUserOption(option => option.setName('target').setDescription('The user to unmute').setRequired(true))
        .addStringOption(option => option.setName('reason').setDescription('Reason for unmuting')),
    async execute(interaction) {
        const target = interaction.options.getUser('target');
        const reason = interaction.options.getString('reason') || 'No reason provided';

        if (!interaction.member.permissions.has('MUTE_MEMBERS')) {
            return interaction.reply({ content: '❌ You do not have permission to unmute members.', ephemeral: true });
        }

        const member = await interaction.guild.members.fetch(target.id).catch(() => null);
        if (member) {
            try {
                await member.voice.setMute(false, reason);
                return interaction.reply(`✅ Successfully unmuted **${target.tag}** for: ${reason}`);
            } catch (err) {
                return interaction.reply({ content: '❌ I was unable to unmute this member. Please check my permissions!', ephemeral: true });
            }
        } else {
            return interaction.reply({ content: '❌ User not found!', ephemeral: true });
        }
    },
};
