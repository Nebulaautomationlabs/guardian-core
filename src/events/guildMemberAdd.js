module.exports = {
    name: 'guildMemberAdd',
    execute(member) {
        console.log(`${member.user.tag} has joined the server.`);
        // You can also welcome users here by sending a message or DM.
    },
};
