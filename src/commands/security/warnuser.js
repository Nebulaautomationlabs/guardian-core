const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('warnuser')
        .setDescription('Issue a warning to a user for rule violations')
        .addUserOption(option => option.setName('target').setDescription('User to warn').setRequired(true))
        .addStringOption(option => option.setName('reason').setDescription('Reason for warning').setRequired(true)),
    async execute(interaction) {
        const target = interaction.options.getUser('target');
        const reason = interaction.options.getString('reason');

        // Simulate issuing a warning
        interaction.reply(`✅ **${target.tag}** has been warned for: **${reason}**`);
    },
};
