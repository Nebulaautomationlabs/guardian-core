const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('kick')
        .setDescription('Kick a user from the server')
        .addUserOption(option => option.setName('target').setDescription('The user to kick').setRequired(true))
        .addStringOption(option => option.setName('reason').setDescription('Reason for the kick')),
    async execute(interaction) {
        const target = interaction.options.getUser('target');
        const reason = interaction.options.getString('reason') || 'No reason provided';

        if (!interaction.member.permissions.has('KICK_MEMBERS')) {
            return interaction.reply({ content: '❌ You do not have permission to kick members.', ephemeral: true });
        }

        if (target) {
            const member = await interaction.guild.members.fetch(target.id).catch(() => null);
            if (member) {
                await member.kick(reason);
                return interaction.reply(`✅ Successfully kicked **${target.tag}** for: ${reason}`);
            } else {
                return interaction.reply({ content: '❌ User not found!', ephemeral: true });
            }
        }
    },
};
