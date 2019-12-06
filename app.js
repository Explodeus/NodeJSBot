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
                        text: '€ EUR',
                        callback_data: 'EUR'
                    },
                    {
                        text: '$ USD',
                        callback_data: 'USD'
                    },
                    {
                        text: '₿ BTC',
                        callback_data: 'BTC'
                    }
                ]
            ]
        }
    });
});

bot.onText(/\/start/, (msg, match) => {
    const chatId = msg.chat.id;

    let md = `Привет!
Спасибо что уделил внимание этому боту.
Пока-что тут есть лишь одна команда:
/curse - вызывает сообщенрие с кнопками для отображения курса валют.
Пожелания: @VSokha
    `;

    bot.sendMessage(chatId, md);
});      

bot.on('sudo Ihor', (msg, match) => {
    
    const chatId = msg.chat.id;

    var photo ='ihor.jpg';

    bot.sendPhoto(chatId, photo, {caption: "ИИИИгорь"});
    
});

bot.on('sudo Игорь', (msg, match) => {
    
    const chatId = msg.chat.id;

    var photo ='ihor.jpg';

    bot.sendPhoto(chatId, photo, {caption: "ИИИИгорь"});
    
});

bot.on('Игорь', (msg, match) => {
    
    const chatId = msg.chat.id;

    var photo ='ihor.jpg';

    bot.sendPhoto(chatId, photo, {caption: "ИИИИгорь"});
    
});

bot.onText(/\/sudoIhor/, (msg, match) => {
    const chatId = msg.chat.id;

    var photo ='ihor.jpg';

    bot.sendPhoto(chatId, photo, {caption: "ИИИИгорь"});
});      

bot.on('callback_query', query => {
    const id = query.message.chat.id;

    request('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5', function(error, response, body){
        const data = JSON.parse(body);
        const result = data.filter(item => item.ccy == query.data)[0];
        const flag = {
            'EUR': "🇪🇺",
            'USD': "🇺🇸",
            'BTC': "₿",
            "UAH": "🇺🇦"
        };
        let md = `
            *${flag[result.ccy]} ${result.ccy} 💱 ${flag[result.base_ccy]} ${result.base_ccy}*
            Покупка: _${result.buy}_
            Продажа: _${result.sale}_
        `
        bot.sendMessage(id, md, {parse_mode: 'Markdown'});
    });
});