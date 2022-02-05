const TelegramBot = require('node-telegram-bot-api');
const { telegramToken, telegramChatId } = require('../config/global');

const bot = new TelegramBot(telegramToken, { polling: false });

const init = async () => {
  await sendMessage({});
};

const sendMessage = async ({ chatId = telegramChatId, message = `server running ${new Date()}` }) => {
  bot.sendMessage(chatId, message);
};

module.exports = {
  sendMessage,
  init,
};