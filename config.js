require('dotenv').config();

module.exports = {
    TOKEN: process.env.DISCORD_BOT_TOKEN,
    SOURCE_CHANNEL_ID: process.env.SOURCE_CHANNEL_ID,
    TARGET_CHANNEL_ID: process.env.TARGET_CHANNEL_ID,
    PREFIX: process.env.PREFIX || '!',
}; 