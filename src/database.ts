import * as fs from 'fs';

const dbFile = 'users.json';

interface UserData {
  code?: string;
}

function loadDB(): Record<string, UserData> {
  if (!fs.existsSync(dbFile)) {
    fs.writeFileSync(dbFile, JSON.stringify({}));
  }
  const data = fs.readFileSync(dbFile, 'utf-8');
  return JSON.parse(data);
}

function saveDB(db: Record<string, UserData>) {
  fs.writeFileSync(dbFile, JSON.stringify(db, null, 2));
}

export function addUser(chatId: string, code: string) {
  const db = loadDB();
  db[chatId] = { code };
  saveDB(db);
}

export function getUser(chatId: string): UserData | undefined {
  const db = loadDB();
  return db[chatId];
}

export function getAllUsers() {
  return loadDB();
}

