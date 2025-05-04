const { SlashCommandBuilder } = require('discord.js');
const recentMessages = new Map();

module.exports = {
    data: new SlashCommandBuilder()
        .setName('antispam')
        .setDescription('Monitor and block spam activity in the server'),
    async execute(interaction) {
        const member = interaction.guild.members.cache.get(interaction.user.id);
        const currentTime = Date.now();

        // Get the user's recent messages and filter for messages within the last 10 seconds
        if (!recentMessages.has(member.id)) {
            recentMessages.set(member.id, []);
        }

        const userMessages = recentMessages.get(member.id);
        userMessages.push(currentTime);
        recentMessages.set(member.id, userMessages);

        // Remove messages that are older than 10 seconds
        const filteredMessages = userMessages.filter(msgTime => currentTime - msgTime < 10000);
        recentMessages.set(member.id, filteredMessages);

        // If the user has sent more than 5 messages in the last 10 seconds, they are flagged as spamming
        if (filteredMessages.length > 5) {
            // Simulate muting or kicking
            member.timeout(60000); // Timeout for 1 minute
            interaction.reply(`❌ **${member.user.tag}** has been muted for spamming.`);
        } else {
            interaction.reply(`✅ Monitoring **${member.user.tag}** for spam.`);
        }
    },
};
