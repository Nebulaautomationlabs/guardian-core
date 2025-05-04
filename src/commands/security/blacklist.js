const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('blacklist')
        .setDescription('Blacklist a user from interacting with the bot')
        .addUserOption(option => option.setName('target').setDescription('User to blacklist').setRequired(true)),
    async execute(interaction) {
        const target = interaction.options.getUser('target');

        // Here we would add the user to the blacklist (could be a database or a JSON file)
        // Simulating that the user is blacklisted for now.
        
        interaction.reply(`✅ **${target.tag}** has been blacklisted from interacting with the bot.`);
    },
};
