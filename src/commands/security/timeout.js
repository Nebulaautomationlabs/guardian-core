const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('timeout')
        .setDescription('Timeout a user for a specified amount of time')
        .addUserOption(option => option.setName('target').setDescription('User to timeout').setRequired(true))
        .addIntegerOption(option => option.setName('duration').setDescription('Duration in minutes').setRequired(true)),
    async execute(interaction) {
        const target = interaction.options.getUser('target');
        const duration = interaction.options.getInteger('duration');
        
        if (!interaction.member.permissions.has('MUTE_MEMBERS')) {
            return interaction.reply({ content: '❌ You do not have permission to timeout members.', ephemeral: true });
        }

        const member = await interaction.guild.members.fetch(target.id).catch(() => null);
        if (member) {
            await member.timeout(duration * 60 * 1000, 'Timeout for violating rules');
            interaction.reply(`✅ **${target.tag}** has been timed out for **${duration}** minutes.`);
        } else {
            interaction.reply({ content: '❌ User not found!', ephemeral: true });
        }
    },
};
