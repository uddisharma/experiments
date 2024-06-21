"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateSchema = exports.decrypt = exports.encrypt = void 0;
const crypto_1 = __importDefault(require("crypto"));
// Encryption and Decryption
function encrypt(data, key) {
    const cipher = crypto_1.default.createCipher('aes-256-ctr', key);
    let encrypted = cipher.update(data, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    return encrypted;
}
exports.encrypt = encrypt;
function decrypt(data, key) {
    const decipher = crypto_1.default.createDecipher('aes-256-ctr', key);
    let decrypted = decipher.update(data, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
}
exports.decrypt = decrypt;
// Validate Data Schema
function validateSchema(data, schema) {
    const { error } = schema.validate(data);
    if (error) {
        throw new Error(`Validation error: ${error.message}`);
    }
}
exports.validateSchema = validateSchema;
