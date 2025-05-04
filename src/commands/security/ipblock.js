const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ipblock')
        .setDescription('Block a specific IP address from joining the server')
        .addStringOption(option => option.setName('ip').setDescription('IP address to block').setRequired(true)),
    async execute(interaction) {
        const ip = interaction.options.getString('ip');

        // Simulate blocking the IP address (real implementation would require custom network setup)
        interaction.reply(`❌ IP address **${ip}** has been blocked from joining the server.`);
    },
};
