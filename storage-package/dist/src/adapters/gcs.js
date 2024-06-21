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
Object.defineProperty(exports, "__esModule", { value: true });
const storage_1 = require("@google-cloud/storage");
class GCSAdapter {
    constructor(bucketName) {
        this.storage = new storage_1.Storage();
        this.bucketName = bucketName;
    }
    storeData(filename, data) {
        return __awaiter(this, void 0, void 0, function* () {
            const bucket = this.storage.bucket(this.bucketName);
            const file = bucket.file(filename);
            yield file.save(data);
        });
    }
    retrieveData(filename) {
        return __awaiter(this, void 0, void 0, function* () {
            const bucket = this.storage.bucket(this.bucketName);
            const file = bucket.file(filename);
            const [data] = yield file.download();
            return data.toString('utf-8');
        });
    }
    deleteData(filename) {
        return __awaiter(this, void 0, void 0, function* () {
            const bucket = this.storage.bucket(this.bucketName);
            const file = bucket.file(filename);
            yield file.delete();
        });
    }
}
exports.default = GCSAdapter;
