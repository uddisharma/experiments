import LocalAdapter from './adapters/local';
import S3Adapter from './adapters/s3';
import GCSAdapter from './adapters/gcs';
import Joi from 'joi';
import crypto from 'crypto';

class Storage {
    private adapter: any;
    private encryptionKey?: string;

    constructor(adapterType: string, config: any, encryptionKey?: string) {
        switch (adapterType) {
            case 'local':
                this.adapter = new LocalAdapter(config.storagePath);
                break;
            case 's3':
                this.adapter = new S3Adapter(config.bucketName);
                break;
            case 'gcs':
                this.adapter = new GCSAdapter(config.bucketName);
                break;
            default:
                throw new Error('Invalid adapter type');
        }
        this.encryptionKey = encryptionKey;
    }

    private encrypt(data: string): string {
        if (!this.encryptionKey) return data;
        const cipher = crypto.createCipher('aes-256-ctr', this.encryptionKey);
        let encrypted = cipher.update(data, 'utf8', 'hex');
        encrypted += cipher.final('hex');
        return encrypted;
    }

    private decrypt(data: string): string {
        if (!this.encryptionKey) return data;
        const decipher = crypto.createDecipher('aes-256-ctr', this.encryptionKey);
        let decrypted = decipher.update(data, 'hex', 'utf8');
        decrypted += decipher.final('utf8');
        return decrypted;
    }

    private validateSchema(data: any, schema: Joi.Schema) {
        const { error } = schema.validate(data);
        if (error) {
            throw new Error(`Validation error: ${error.message}`);
        }
    }

    async storeData(filename: string, data: any) {
        const schema = Joi.object().unknown(true); // Modify this to suit your data schema
        this.validateSchema(data, schema);

        let dataToStore = JSON.stringify(data);
        dataToStore = this.encrypt(dataToStore);
        await this.adapter.storeData(filename, dataToStore);
    }

    async retrieveData(filename: string) {
        let data = await this.adapter.retrieveData(filename);
        data = this.decrypt(data);
        return JSON.parse(data);
    }

    async updateData(filename: string, newData: any) {
        const schema = Joi.object().unknown(true); // Modify this to suit your data schema
        this.validateSchema(newData, schema);

        const data = await this.retrieveData(filename);
        const updatedData = { ...data, ...newData };
        await this.storeData(filename, updatedData);
    }

    async deleteData(filename: string) {
        await this.adapter.deleteData(filename);
    }
}

export default Storage;
