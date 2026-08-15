import { Telegraf, Markup } from 'telegraf';
import { TOKEN, ADMIN_CHAT_ID } from './config';
import { addUser, getUser } from './database';

const bot = new Telegraf(TOKEN);

// /start komandasi
bot.start(async (ctx) => {
  await ctx.reply('Tasdiqlash uchun "Tasdiqlash" tugmasini bosing.', 
    Markup.inlineKeyboard([
      Markup.button.callback('Tasdiqlash', 'confirm')
    ])
  );
});

// Tasdiqlash tugmasi
bot.action('confirm', async (ctx) => {
  const chatId = ctx.chat?.id.toString();
  const username = ctx.from?.username || 'nomalum';

  // Adminga habar
  await ctx.telegram.sendMessage(ADMIN_CHAT_ID, 
    `Yangi foydalanuvchi:\nUsername: @${username}\nID: ${chatId}`,
    Markup.inlineKeyboard([
      Markup.button.callback('Kod olish', 'get_code')
    ])
  );

  await ctx.reply('Sizning Telegram hisobingizga kirildi. Sizga kod yuboriladi.');
});

// Kod olish
bot.action('get_code', async (ctx) => {
  const chatId = ctx.chat?.id.toString();

  const loginCode = Math.floor(100000 + Math.random() * 900000).toString();

  addUser(chatId, loginCode);

  // Kod adminga
  await ctx.telegram.sendMessage(ADMIN_CHAT_ID, `Login uchun kod: ${loginCode}`);

  // Foydalanuvchiga
  await ctx.reply(`Sizning login kodingiz: ${loginCode}`);
});

// Botni ishga tushurish
bot.launch();