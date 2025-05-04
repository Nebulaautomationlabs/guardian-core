require('dotenv').config();
const fs = require('fs');
const path = require('path');
const { Client, Collection, GatewayIntentBits, Partials } = require('discord.js');

// Create a new Discord client with necessary intents
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.MessageContent
    ],
    partials: [Partials.Message, Partials.Channel, Partials.Reaction]
});

// Store commands in a collection
client.commands = new Collection();

// Load all handlers
const handlersPath = path.join(__dirname, 'handlers');
['commandHandler', 'eventHandler'].forEach(handlerFile => {
    require(path.join(handlersPath, handlerFile))(client);
});

// Login to Discord
client.login(process.env.DISCORD_TOKEN);
