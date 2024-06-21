import Storage from '../src/storage';
import fs from 'fs';
import path from 'path';
import { afterAll, beforeAll, describe, expect, it, test } from '@jest/globals';

const localStoragePath = './test-local-storage';
const encryptionKey = 'testEncryptionKey';

beforeAll(() => {
  if (!fs.existsSync(localStoragePath)) {
    fs.mkdirSync(localStoragePath);
  }
});

afterAll(() => {
  fs.rmdirSync(localStoragePath, { recursive: true });
});

describe('Local Storage Adapter', () => {
  const storage = new Storage('local', { storagePath: localStoragePath }, encryptionKey);

  it('should store and retrieve data correctly', async () => {
    const filename = 'test-data.json';
    const data = { name: 'John', age: 30 };

    await storage.storeData(filename, data);
    const retrievedData = await storage.retrieveData(filename);

    expect(retrievedData).toEqual(data);
  });

  it('should update data correctly', async () => {
    const filename = 'test-data.json';
    const newData = { age: 31 };

    await storage.updateData(filename, newData);
    const updatedData = await storage.retrieveData(filename);

    expect(updatedData.age).toBe(31);
  });

  it('should delete data correctly', async () => {
    const filename = 'test-data.json';

    await storage.deleteData(filename);
    expect(storage.retrieveData(filename)).rejects.toThrow('File not found');
  });
});
