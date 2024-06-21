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
const aws_sdk_1 = __importDefault(require("aws-sdk"));
class S3Adapter {
    constructor(bucketName) {
        this.s3 = new aws_sdk_1.default.S3();
        this.bucketName = bucketName;
    }
    storeData(key, data) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.s3.putObject({
                Bucket: this.bucketName,
                Key: key,
                Body: data
            }).promise();
        });
    }
    retrieveData(key) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.s3.getObject({
                Bucket: this.bucketName,
                Key: key
            }).promise();
            if (result.Body) {
                return result.Body.toString('utf-8');
            }
            else {
                throw new Error('File not found');
            }
        });
    }
    deleteData(key) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.s3.deleteObject({
                Bucket: this.bucketName,
                Key: key
            }).promise();
        });
    }
}
exports.default = S3Adapter;
