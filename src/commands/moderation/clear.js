const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('clear')
        .setDescription('Clear a specified number of messages')
        .addIntegerOption(option => option.setName('amount').setDescription('Number of messages to delete').setRequired(true)),
    async execute(interaction) {
        const amount = interaction.options.getInteger('amount');
        if (!interaction.member.permissions.has('MANAGE_MESSAGES')) {
            return interaction.reply({ content: '❌ You do not have permission to clear messages.', ephemeral: true });
        }

        if (amount < 1 || amount > 100) {
            return interaction.reply({ content: '❌ You can only delete between 1 and 100 messages at a time.', ephemeral: true });
        }

        await interaction.channel.bulkDelete(amount, true);
        return interaction.reply(`✅ Successfully cleared ${amount} messages.`);
    },
};
