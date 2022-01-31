require('dotenv').config();

module.exports = {
  appPort: Number(process.env.APP_PORT) || 3001,
  appHost: Number(process.env.HOST),
  appDomain: process.env.APP_DOMAIN,
  // ---- Mongoo
  mongooUri: process.env.MONGO_URI || 'mongodb://localhost:27017/manten',
  // ---- Telegram
  telegramToken: process.env.TELEGRAM_TOKEN,
  telegramChatId: process.env.TELEGRAM_CHAT_ID,
};