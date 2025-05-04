const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('unlockdown')
        .setDescription('Unlock a channel that has been locked down')
        .addChannelOption(option => option.setName('channel').setDescription('The channel to unlock').setRequired(true)),
    async execute(interaction) {
        const channel = interaction.options.getChannel('channel');

        if (!interaction.member.permissions.has('MANAGE_CHANNELS')) {
            return interaction.reply({ content: '❌ You do not have permission to unlock this channel.', ephemeral: true });
        }

        await channel.permissionOverwrites.edit(channel.guild.id, {
            SEND_MESSAGES: true
        });

        interaction.reply(`✅ **${channel.name}** has been unlocked.`);
    },
};
