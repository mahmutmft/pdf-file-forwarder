const { Client, GatewayIntentBits, EmbedBuilder } = require('discord.js');
const config = require('./config');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildPresences,
    ],
});

// Error handling
process.on('unhandledRejection', error => {
    console.error('Unhandled promise rejection:', error);
});

client.once('ready', () => {
    console.log(`🤖 Bot is active as ${client.user.tag}`);
    client.user.setActivity('for PDFs', { type: 'WATCHING' });
});

client.on('messageCreate', async (message) => {
    try {
        if (message.channel.id === config.SOURCE_CHANNEL_ID && message.attachments.size > 0) {
            const pdfAttachments = message.attachments.filter(attachment => 
                attachment.name.toLowerCase().endsWith('.pdf')
            );

            if (pdfAttachments.size === 0) return;

            const targetChannel = client.channels.cache.get(config.TARGET_CHANNEL_ID);
            if (!targetChannel) {
                console.error('Target channel not found!');
                return;
            }

            for (const attachment of pdfAttachments.values()) {
                const embed = new EmbedBuilder()
                    .setColor('#0099ff')
                    .setAuthor({
                        name: 'PDF File Forwarder',
                        iconURL: client.user.displayAvatarURL()
                    })
                    .setTitle(`📄 ${attachment.name}`)
                    .setDescription(`
📤 **Shared by:** ${message.author.tag}
📁 **File Size:** ${(attachment.size / (1024 * 1024)).toFixed(2)} MB
🔗 **Original Channel:** <#${message.channel.id}>
                    `)
                    .setTimestamp()
                    .setFooter({ 
                        text: '✨ Auto-forwarded PDF',
                        iconURL: message.author.displayAvatarURL()
                    });

                await targetChannel.send({
                    embeds: [embed],
                    files: [attachment.url],
                });
            }
        }
    } catch (error) {
        console.error('Error in messageCreate event:', error);
    }
});

client.login(config.TOKEN).catch(error => {
    console.error('Failed to login:', error);
    process.exit(1);
});
