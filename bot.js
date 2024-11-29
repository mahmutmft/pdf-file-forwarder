const { Client, GatewayIntentBits } = require('discord.js');

const TOKEN = 'YOUR_BOT_TOKEN_HERE';

const SOURCE_CHANNEL_ID = 'CHANNEL_ID_HERE'; 
const TARGET_CHANNEL_ID = 'CHANNEL_ID_HERE'; 

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ],
});

client.once('ready', () => {
    console.log(`BOT IS ACTIVE ${client.user.tag}`);
});

client.on('messageCreate', async (message) => {
    if (message.channel.id === SOURCE_CHANNEL_ID && message.attachments.size > 0) {
        message.attachments.forEach((attachment) => {
            if (attachment.name.endsWith('.pdf')) {
                const targetChannel = client.channels.cache.get(TARGET_CHANNEL_ID);
                if (targetChannel) {
                    targetChannel.send({
                        content: `PDF file од ${message.author.username}:`,
                        files: [attachment.url],
                    });
                }
            }
        });
    }
});

client.login(TOKEN);
