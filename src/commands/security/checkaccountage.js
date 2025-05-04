const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('checkaccountage')
        .setDescription('Check the account age of a user to avoid alt accounts')
        .addUserOption(option => option.setName('target').setDescription('User to check account age').setRequired(true)),
    async execute(interaction) {
        const target = interaction.options.getUser('target');
        const accountCreationDate = target.createdAt;

        const accountAge = Math.floor((Date.now() - accountCreationDate) / (1000 * 60 * 60 * 24)); // Account age in days
        interaction.reply(`✅ **${target.tag}**'s account was created **${accountAge}** days ago.`);
    },
};
