require('dotenv').config();
const { Client, GatewayIntentBits } = require('discord.js');

// Креирај Discord клиент
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

// Ботот е онлајн
client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

// Реакција на пораки
client.on('messageCreate', (message) => {
    if (message.content === '!hello') {
        message.channel.send('Здраво! Јас сум ботот!');
    }
});

// Логирај го ботот
client.login(process.env.DISCORD_TOKEN);
