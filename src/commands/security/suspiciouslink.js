const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('suspiciouslink')
        .setDescription('Detect and alert about suspicious links in messages'),
    async execute(interaction) {
        const message = interaction.message.content;
        const suspiciousLinks = ['.ru', '.xyz', 'bit.ly']; // Example of suspicious links
        
        const containsSuspiciousLink = suspiciousLinks.some(link => message.includes(link));
        
        if (containsSuspiciousLink) {
            interaction.reply('⚠️ Suspicious link detected! Please be cautious.');
        } else {
            interaction.reply('✅ No suspicious links detected.');
        }
    },
};
