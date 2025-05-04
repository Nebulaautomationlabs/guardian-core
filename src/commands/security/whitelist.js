const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('whitelist')
        .setDescription('Whitelist a user to allow interactions with the bot')
        .addUserOption(option => option.setName('target').setDescription('User to whitelist').setRequired(true)),
    async execute(interaction) {
        const target = interaction.options.getUser('target');

        // Add the user to the whitelist (could be a database or a JSON file)
        
        interaction.reply(`✅ **${target.tag}** has been whitelisted and can now interact with the bot.`);
    },
};
