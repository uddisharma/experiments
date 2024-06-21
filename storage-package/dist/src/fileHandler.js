"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
class FileHandler {
    constructor(storagePath) {
        this.storagePath = storagePath;
    }
    uploadFile(filename, fileContent) {
        const filePath = path_1.default.join(this.storagePath, filename);
        fs_1.default.writeFileSync(filePath, fileContent);
    }
    downloadFile(filename) {
        const filePath = path_1.default.join(this.storagePath, filename);
        if (fs_1.default.existsSync(filePath)) {
            return fs_1.default.readFileSync(filePath);
        }
        else {
            throw new Error('File not found');
        }
    }
    deleteFile(filename) {
        const filePath = path_1.default.join(this.storagePath, filename);
        if (fs_1.default.existsSync(filePath)) {
            fs_1.default.unlinkSync(filePath);
        }
        else {
            throw new Error('File not found');
        }
    }
    validateFileType(filename, allowedTypes) {
        const fileType = path_1.default.extname(filename).slice(1);
        if (!allowedTypes.includes(fileType)) {
            throw new Error('Invalid file type');
        }
    }
    validateFileSize(fileContent, maxSize) {
        if (fileContent.length > maxSize) {
            throw new Error('File size exceeds limit');
        }
    }
}
exports.default = FileHandler;
