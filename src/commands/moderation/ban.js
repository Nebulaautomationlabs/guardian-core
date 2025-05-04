const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ban')
        .setDescription('Ban a user from the server')
        .addUserOption(option => option.setName('target').setDescription('The user to ban').setRequired(true))
        .addStringOption(option => option.setName('reason').setDescription('Reason for the ban')),
    async execute(interaction) {
        const target = interaction.options.getUser('target');
        const reason = interaction.options.getString('reason') || 'No reason provided';

        if (!interaction.member.permissions.has('BAN_MEMBERS')) {
            return interaction.reply({ content: '❌ You do not have permission to ban members.', ephemeral: true });
        }

        if (target) {
            const member = await interaction.guild.members.fetch(target.id).catch(() => null);
            if (member) {
                await member.ban({ reason });
                return interaction.reply(`✅ Successfully banned **${target.tag}** for: ${reason}`);
            } else {
                return interaction.reply({ content: '❌ User not found!', ephemeral: true });
            }
        }
    },
};
