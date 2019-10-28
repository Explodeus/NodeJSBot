const TelegramBot = require('node-telegram-bot-api');
const request = require('request');

const token = '962874264:AAFWRHEXHNmEmosluj36NXXOH06eKk6Hzak';

const bot = new TelegramBot(token, {polling: true});

bot.onText(/\/curse/, (msg, match) => {

    const chatId = msg.chat.id;

    bot.sendMessage(chatId, 'Какая валюта вас интересует?', {
        reply_markup:{
            inline_keyboard: [
                [
                    {
                        text: 'EUR',
                        callback_data: 'EUR'
                    },
                    {
                        text: 'USD',
                        callback_data: 'USD'
                    },
                    {
                        text: 'RUB',
                        callback_data: 'RUB'
                    },
                    {
                        text: 'BTC',
                        callback_data: 'BTC'
                    }
                ]
            ]
        }
    });
  });