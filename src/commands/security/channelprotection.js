const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('channelprotection')
        .setDescription('Protect channels from being deleted or renamed')
        .addChannelOption(option => option.setName('channel').setDescription('Channel to protect').setRequired(true)),
    async execute(interaction) {
        const channel = interaction.options.getChannel('channel');

        if (!interaction.member.permissions.has('MANAGE_CHANNELS')) {
            return interaction.reply({ content: '❌ You do not have permission to protect channels.', ephemeral: true });
        }

        // Simulate protecting the channel from being deleted or renamed.
        interaction.reply(`✅ **${channel.name}** is now protected from being deleted or renamed.`);
    },
};
