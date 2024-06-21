"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const local_1 = __importDefault(require("../src/adapters/local"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const globals_1 = require("@jest/globals");
const localStoragePath = './test-local-storage';
(0, globals_1.beforeAll)(() => {
    if (!fs_1.default.existsSync(localStoragePath)) {
        fs_1.default.mkdirSync(localStoragePath);
    }
});
(0, globals_1.afterAll)(() => {
    fs_1.default.rmdirSync(localStoragePath, { recursive: true });
});
(0, globals_1.describe)('Local File Handler', () => {
    const localAdapter = new local_1.default(localStoragePath);
    (0, globals_1.it)('should store data correctly', () => {
        const filename = 'test-file.txt';
        const data = 'Hello, World!';
        localAdapter.storeData(filename, data);
        const filePath = path_1.default.join(localStoragePath, filename);
        const storedData = fs_1.default.readFileSync(filePath, 'utf-8');
        (0, globals_1.expect)(storedData).toBe(data);
    });
    (0, globals_1.it)('should retrieve data correctly', () => {
        const filename = 'test-file.txt';
        const data = 'Hello, World!';
        const retrievedData = localAdapter.retrieveData(filename);
        (0, globals_1.expect)(retrievedData).toBe(data);
    });
    (0, globals_1.it)('should delete data correctly', () => {
        const filename = 'test-file.txt';
        localAdapter.deleteData(filename);
        const filePath = path_1.default.join(localStoragePath, filename);
        (0, globals_1.expect)(fs_1.default.existsSync(filePath)).toBe(false);
    });
});
