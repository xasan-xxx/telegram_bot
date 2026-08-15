import * as dotenv from 'dotenv';

dotenv.config();

export const TOKEN = process.env.TOKEN as string;
export const ADMIN_CHAT_ID = process.env.ADMIN_CHAT_ID as string;