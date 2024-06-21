"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const storage_1 = __importDefault(require("../src/storage"));
const fs_1 = __importDefault(require("fs"));
const globals_1 = require("@jest/globals");
const localStoragePath = './test-local-storage';
const encryptionKey = 'testEncryptionKey';
(0, globals_1.beforeAll)(() => {
    if (!fs_1.default.existsSync(localStoragePath)) {
        fs_1.default.mkdirSync(localStoragePath);
    }
});
(0, globals_1.afterAll)(() => {
    fs_1.default.rmdirSync(localStoragePath, { recursive: true });
});
(0, globals_1.describe)('Local Storage Adapter', () => {
    const storage = new storage_1.default('local', { storagePath: localStoragePath }, encryptionKey);
    (0, globals_1.it)('should store and retrieve data correctly', () => __awaiter(void 0, void 0, void 0, function* () {
        const filename = 'test-data.json';
        const data = { name: 'John', age: 30 };
        yield storage.storeData(filename, data);
        const retrievedData = yield storage.retrieveData(filename);
        (0, globals_1.expect)(retrievedData).toEqual(data);
    }));
    (0, globals_1.it)('should update data correctly', () => __awaiter(void 0, void 0, void 0, function* () {
        const filename = 'test-data.json';
        const newData = { age: 31 };
        yield storage.updateData(filename, newData);
        const updatedData = yield storage.retrieveData(filename);
        (0, globals_1.expect)(updatedData.age).toBe(31);
    }));
    (0, globals_1.it)('should delete data correctly', () => __awaiter(void 0, void 0, void 0, function* () {
        const filename = 'test-data.json';
        yield storage.deleteData(filename);
        (0, globals_1.expect)(storage.retrieveData(filename)).rejects.toThrow('File not found');
    }));
});
