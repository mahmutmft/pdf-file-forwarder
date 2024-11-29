
# 📄 PDF File Forwarder Bot 🤖

A **simple and efficient Discord bot** for automatically forwarding PDF files from one channel to another. This bot is perfect for sharing documents across your servers with minimal setup!

---

## ✨ Features
- 📂 Automatically detects PDF files in a specified source channel.
- 🔄 Forwards PDF files to a target channel seamlessly.
- ⚙️ Easy to configure and deploy, even for beginners.

---

## 🛠️ Requirements
1. **Node.js**: Download and install [Node.js](https://nodejs.org).
2. **Discord Bot Token**: Create a bot in the [Discord Developer Portal](https://discord.com/developers/applications).
3. **Channel IDs**: Obtain source and target channel IDs from your Discord server.

---

## 🚀 Getting Started

### 1️⃣ Download the Bot
Clone or download the repository containing the `bot.js` file.

```bash
git clone https://github.com/your-username/pdf-file-forwarder-bot.git
cd pdf-file-forwarder-bot
```

### 2️⃣ Configure the Bot
Open the `bot.js` file in any text editor and update the following fields:

```javascript
const TOKEN = 'YOUR_DISCORD_BOT_TOKEN'; // Your bot token
const SOURCE_CHANNEL_ID = 'SOURCE_CHANNEL_ID'; // Source channel ID
const TARGET_CHANNEL_ID = 'TARGET_CHANNEL_ID'; // Target channel ID
```

- Replace `YOUR_DISCORD_BOT_TOKEN` with your bot token.
- Replace `SOURCE_CHANNEL_ID` with the ID of the source channel.
- Replace `TARGET_CHANNEL_ID` with the ID of the target channel.

### 3️⃣ Install Dependencies
Install the required dependencies using npm:

```bash
npm install discord.js
```

### 4️⃣ Run the Bot
Run the bot using Node.js:

```bash
node bot.js
```

If the bot is active, you'll see a message like:
```
BOT IS ACTIVE <your-bot-username>
```

---

## 💡 How It Works
- The bot monitors the source channel for messages containing PDF files.
- When a PDF file is detected, the bot forwards it to the target channel automatically.

---

## 🔧 Tips

### Obtain a Discord Bot Token
1. Go to the [Discord Developer Portal](https://discord.com/developers/applications).
2. Create a new application and add a bot.
3. Generate a bot token and replace it in the `bot.js` file.

### Get Channel IDs
1. Enable Developer Mode in Discord settings.
2. Right-click on the channel name and select **Copy ID**.

---

## 🙋‍♂️ Support
If you encounter any issues or have questions, feel free to:
- Open an issue in this repository.
- Reach out to the project maintainer.

---

Enjoy using the PDF File Forwarder Bot! 🎉
