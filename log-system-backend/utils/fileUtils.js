import fs from 'fs/promises';
const FILE_PATH = './logs.json';

export const readLogs = async () => {
  try {
    const data = await fs.readFile(FILE_PATH, 'utf-8');
    return JSON.parse(data);
  } catch {
    return [];
  }
};

export const writeLogs = async (logs) => {
  await fs.writeFile(FILE_PATH, JSON.stringify(logs, null, 2));
};
