require('dotenv').config();

module.exports = {
    token: process.env.TELEGRAM_BOT_TOKEN,
    databasePath: process.env.DB_PATH || './database.sqlite',
    apiUrl: 'https://api.telegram.org',
    // boshqalar
};