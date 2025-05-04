const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('purge')
        .setDescription('Purge messages from a specific user or within a channel')
        .addUserOption(option => option.setName('target').setDescription('User whose messages to purge').setRequired(true))
        .addIntegerOption(option => option.setName('amount').setDescription('Number of messages to purge').setRequired(true)),
    async execute(interaction) {
        const target = interaction.options.getUser('target');
        const amount = interaction.options.getInteger('amount');

        if (!interaction.member.permissions.has('MANAGE_MESSAGES')) {
            return interaction.reply({ content: '❌ You do not have permission to purge messages.', ephemeral: true });
        }

        const messages = await interaction.channel.messages.fetch({ limit: amount });
        const userMessages = messages.filter(msg => msg.author.id === target.id);
        
        await interaction.channel.bulkDelete(userMessages);

        interaction.reply(`✅ **${userMessages.size}** messages from **${target.tag}** have been purged.`);
    },
};
