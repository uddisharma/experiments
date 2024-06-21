import dotenv from 'dotenv';

dotenv.config();

export const config = {
  storagePath: process.env.STORAGE_PATH || './storage',
  encryptionKey: process.env.ENCRYPTION_KEY || 'default_key'
};
