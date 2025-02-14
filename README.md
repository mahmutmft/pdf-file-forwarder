# 📄 PDF File Forwarder Bot 🤖

A **powerful and reliable Discord bot** for automatically forwarding PDF files from one channel to another, with embedded messages and error handling.

## ✨ Features

- 📂 Automatic PDF file detection and forwarding
- 🎨 Beautiful embedded messages with file information
- 🔒 Secure environment variable configuration
- 🛡️ Robust error handling
- 🔄 Easy deployment process

## 🛠️ Requirements

- **Node.js**: v16.9.0 or higher
- **Discord Bot Token**: From [Discord Developer Portal](https://discord.com/developers/applications)
- **Channel IDs**: Source and target channel IDs from your Discord server

## 🚀 Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/pdf-file-forwarder-bot.git
   cd pdf-file-forwarder-bot
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**
   ```bash
   cp .env.example .env
   ```
   Edit the `.env` file with your configuration:
   ```env
   DISCORD_BOT_TOKEN=your_bot_token_here
   SOURCE_CHANNEL_ID=your_source_channel_id
   TARGET_CHANNEL_ID=your_target_channel_id
   PREFIX=!
   ```

4. **Start the bot**
   ```bash
   # Production
   npm start

   # Development with auto-reload
   npm run dev
   ```

## 🔧 Configuration

### Bot Token
1. Go to [Discord Developer Portal](https://discord.com/developers/applications)
2. Create a new application
3. Navigate to the "Bot" section
4. Click "Reset Token" to get your bot token
5. Enable necessary Privileged Gateway Intents

### Channel IDs
1. Enable Developer Mode in Discord (User Settings > App Settings > Advanced)
2. Right-click any channel and select "Copy ID"

### Bot Intents
1. Go to [Discord Developer Portal](https://discord.com/developers/applications)
2. Select your bot application
3. Click on "Bot" in the left sidebar
4. Scroll down to "Privileged Gateway Intents"
5. Enable these required intents:
   - MESSAGE CONTENT INTENT
   - SERVER MEMBERS INTENT
   - PRESENCE INTENT

> ⚠️ **Important**: Your bot needs these intents to function properly. Without them, the bot will fail to connect.

## 🛡️ Security

- Never commit your `.env` file
- Keep your bot token private
- Regularly rotate your bot token if compromised
- Use environment variables for sensitive data

## 🔍 Troubleshooting

### Common Issues

1. **Bot doesn't start**
   - Check if Node.js version is 16.9.0 or higher
   - Verify environment variables are set correctly
   - Ensure all dependencies are installed

2. **Bot doesn't forward files**
   - Verify channel IDs are correct
   - Check bot permissions in both channels
   - Ensure bot has necessary intents enabled

## 📚 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Support

If you need help or want to report issues:
- Open an [issue](https://github.com/mahmutmft/pdf-file-forwarder/issues)

---

<div align="center">
    <p>
        <a href="https://github.com/mahmutmft">
            <img src="https://img.shields.io/badge/GitHub-mahmutmft-blue?style=flat-square&logo=github" alt="GitHub">
        </a>
        <a href="https://github.com/mahmutmft/pdf-file-forwarder/blob/main/LICENSE">
            <img src="https://img.shields.io/badge/License-MIT-green.svg?style=flat-square" alt="License">
        </a>
        <img src="https://img.shields.io/badge/Made%20with-❤️-red?style=flat-square" alt="Made with love">
    </p>
    <p>© 2024 Mahmut. All rights reserved.</p>
</div>
