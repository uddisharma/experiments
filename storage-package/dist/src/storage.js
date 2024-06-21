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
const local_1 = __importDefault(require("./adapters/local"));
const s3_1 = __importDefault(require("./adapters/s3"));
const gcs_1 = __importDefault(require("./adapters/gcs"));
const joi_1 = __importDefault(require("joi"));
const crypto_1 = __importDefault(require("crypto"));
class Storage {
    constructor(adapterType, config, encryptionKey) {
        switch (adapterType) {
            case 'local':
                this.adapter = new local_1.default(config.storagePath);
                break;
            case 's3':
                this.adapter = new s3_1.default(config.bucketName);
                break;
            case 'gcs':
                this.adapter = new gcs_1.default(config.bucketName);
                break;
            default:
                throw new Error('Invalid adapter type');
        }
        this.encryptionKey = encryptionKey;
    }
    encrypt(data) {
        if (!this.encryptionKey)
            return data;
        const cipher = crypto_1.default.createCipher('aes-256-ctr', this.encryptionKey);
        let encrypted = cipher.update(data, 'utf8', 'hex');
        encrypted += cipher.final('hex');
        return encrypted;
    }
    decrypt(data) {
        if (!this.encryptionKey)
            return data;
        const decipher = crypto_1.default.createDecipher('aes-256-ctr', this.encryptionKey);
        let decrypted = decipher.update(data, 'hex', 'utf8');
        decrypted += decipher.final('utf8');
        return decrypted;
    }
    validateSchema(data, schema) {
        const { error } = schema.validate(data);
        if (error) {
            throw new Error(`Validation error: ${error.message}`);
        }
    }
    storeData(filename, data) {
        return __awaiter(this, void 0, void 0, function* () {
            const schema = joi_1.default.object().unknown(true); // Modify this to suit your data schema
            this.validateSchema(data, schema);
            let dataToStore = JSON.stringify(data);
            dataToStore = this.encrypt(dataToStore);
            yield this.adapter.storeData(filename, dataToStore);
        });
    }
    retrieveData(filename) {
        return __awaiter(this, void 0, void 0, function* () {
            let data = yield this.adapter.retrieveData(filename);
            data = this.decrypt(data);
            return JSON.parse(data);
        });
    }
    updateData(filename, newData) {
        return __awaiter(this, void 0, void 0, function* () {
            const schema = joi_1.default.object().unknown(true); // Modify this to suit your data schema
            this.validateSchema(newData, schema);
            const data = yield this.retrieveData(filename);
            const updatedData = Object.assign(Object.assign({}, data), newData);
            yield this.storeData(filename, updatedData);
        });
    }
    deleteData(filename) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.adapter.deleteData(filename);
        });
    }
}
exports.default = Storage;
