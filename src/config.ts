import * as dotenv from 'dotenv';

dotenv.config();

export const TOKEN = process.env.BOT_TOKEN || '';
export const ADMIN_CHAT_ID = parseInt(process.env.ADMIN_CHAT_ID || '', 10);