const { Telegraf } = require('telegraf');
const config = require('../config/config');

const bot = new Telegraf(config.token);

bot.start((ctx) => ctx.reply('Salom! Bot ishga tushdi.'));
bot.help((ctx) => ctx.reply('Yordam uchun yozing!'));

// boshqa komandalar va handlerlar

bot.launch();

console.log('Bot ishga tushdi');