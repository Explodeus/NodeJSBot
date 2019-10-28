const TelegramBot = require('node-telegram-bot-api');
const request = require('request');

const token = '962874264:AAFWRHEXHNmEmosluj36NXXOH06eKk6Hzak';

const bot = new TelegramBot(token, {polling: true});

bot.onText(/\/curse/, (msg, match) => {

    const chatId = msg.chat.id;

    bot.sendMessage(chatId, 'Test');
  });