// ma'lumotlar bazasi bilan ishlash fayli (misol uchun, sqlite yoki mongodb)
const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('./database.sqlite');

module.exports = db;