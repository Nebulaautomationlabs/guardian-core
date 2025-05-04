const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('checksuspiciousactivity')
        .setDescription('Check if a user has been flagged for suspicious behavior')
        .addUserOption(option => option.setName('target').setDescription('User to check for suspicious activity').setRequired(true)),
    async execute(interaction) {
        const target = interaction.options.getUser('target');

        // Simulate checking for suspicious activity (e.g., behavior logs)
        interaction.reply(`✅ **${target.tag}** has not been flagged for suspicious activity.`);
    },
};
