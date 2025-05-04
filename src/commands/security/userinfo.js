const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('userinfo')
        .setDescription('View detailed information about a user')
        .addUserOption(option => option.setName('target').setDescription('User to view info').setRequired(true)),
    async execute(interaction) {
        const target = interaction.options.getUser('target');
        
        const member = await interaction.guild.members.fetch(target.id);
        
        interaction.reply({
            content: `**User Info:**\nName: ${target.tag}\nJoined on: ${member.joinedAt}\nAccount created on: ${target.createdAt}`,
            ephemeral: true
        });
    },
};
