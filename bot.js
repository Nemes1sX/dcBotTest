const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMembers,
    ],
});
const prefix = '!';

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('messageCreate', (message) => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    console.log(`Command received: ${command}`);


    // Your command handling logic goes here

    if (command === 'ping') {
        message.reply('Pong!');
    }
});

client.login('MTIwMjk0NjI1MDc0ODQ2OTI5OQ.GHDlMA.dhd8h8FsQO4G8ZgnDnGMLNeRXIeijt3Jsmn5Jg');