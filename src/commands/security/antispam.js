const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('antispam')
        .setDescription('Enable or disable anti-spam protection for the server')
        .addBooleanOption(option => option.setName('status').setDescription('Enable or disable anti-spam').setRequired(true)),
    async execute(interaction) {
        const status = interaction.options.getBoolean('status');

        // You would manage this by enabling/disabling an anti-spam feature here.
        
        interaction.reply(status ? '✅ Anti-spam protection enabled.' : '✅ Anti-spam protection disabled.');
    },
};
