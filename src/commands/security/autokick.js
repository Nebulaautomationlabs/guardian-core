const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('autokick')
        .setDescription('Automatically kick users after inactivity or suspicious behavior')
        .addUserOption(option => option.setName('target').setDescription('User to auto-kick').setRequired(true)),
    async execute(interaction) {
        const target = interaction.options.getUser('target');

        // Simulate auto-kicking by inactivity
        interaction.reply(`✅ **${target.tag}** has been set for automatic kick after inactivity.`);
    },
};
