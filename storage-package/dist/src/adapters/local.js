"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
class LocalAdapter {
    constructor(storagePath) {
        this.storagePath = storagePath;
    }
    storeData(filename, data) {
        const filePath = path_1.default.join(this.storagePath, filename);
        fs_1.default.writeFileSync(filePath, data);
    }
    retrieveData(filename) {
        const filePath = path_1.default.join(this.storagePath, filename);
        if (fs_1.default.existsSync(filePath)) {
            return fs_1.default.readFileSync(filePath, 'utf-8');
        }
        else {
            throw new Error('File not found');
        }
    }
    deleteData(filename) {
        const filePath = path_1.default.join(this.storagePath, filename);
        if (fs_1.default.existsSync(filePath)) {
            fs_1.default.unlinkSync(filePath);
        }
        else {
            throw new Error('File not found');
        }
    }
}
exports.default = LocalAdapter;
