import LocalAdapter from '../src/adapters/local';
import fs from 'fs';
import path from 'path';
import { afterAll, beforeAll, describe, expect, it, test } from '@jest/globals';


const localStoragePath = './test-local-storage';

beforeAll(() => {
  if (!fs.existsSync(localStoragePath)) {
    fs.mkdirSync(localStoragePath);
  }
});

afterAll(() => {
  fs.rmdirSync(localStoragePath, { recursive: true });
});

describe('Local File Handler', () => {
  const localAdapter = new LocalAdapter(localStoragePath);

  it('should store data correctly', () => {
    const filename = 'test-file.txt';
    const data = 'Hello, World!';

    localAdapter.storeData(filename, data);
    const filePath = path.join(localStoragePath, filename);
    const storedData = fs.readFileSync(filePath, 'utf-8');

    expect(storedData).toBe(data);
  });

  it('should retrieve data correctly', () => {
    const filename = 'test-file.txt';
    const data = 'Hello, World!';

    const retrievedData = localAdapter.retrieveData(filename);

    expect(retrievedData).toBe(data);
  });

  it('should delete data correctly', () => {
    const filename = 'test-file.txt';

    localAdapter.deleteData(filename);
    const filePath = path.join(localStoragePath, filename);

    expect(fs.existsSync(filePath)).toBe(false);
  });
});
