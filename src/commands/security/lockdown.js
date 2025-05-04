const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('lockdown')
        .setDescription('Lockdown a channel to prevent any users from sending messages')
        .addChannelOption(option => option.setName('channel').setDescription('The channel to lockdown').setRequired(true)),
    async execute(interaction) {
        const channel = interaction.options.getChannel('channel');

        if (!interaction.member.permissions.has('MANAGE_CHANNELS')) {
            return interaction.reply({ content: '❌ You do not have permission to lock down this channel.', ephemeral: true });
        }

        await channel.permissionOverwrites.edit(channel.guild.id, {
            SEND_MESSAGES: false
        });

        interaction.reply(`✅ **${channel.name}** has been locked down.`);
    },
};
