module.exports = {
    name: 'ready',
    once: true,
    execute(client) {
        console.log(`✅ GuardianCore is online as ${client.user.tag}`);
    },
};
