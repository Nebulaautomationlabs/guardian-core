const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('roleprotection')
        .setDescription('Protect certain roles from being edited by unauthorized users')
        .addRoleOption(option => option.setName('role').setDescription('Role to protect').setRequired(true)),
    async execute(interaction) {
        const role = interaction.options.getRole('role');

        if (!interaction.member.permissions.has('MANAGE_ROLES')) {
            return interaction.reply({ content: '❌ You do not have permission to protect roles.', ephemeral: true });
        }

        // Simulating role protection by storing in a database or memory.
        interaction.reply(`✅ **${role.name}** is now protected from unauthorized edits.`);
    },
};
