import crypto from 'crypto';
import Joi from 'joi';

// Encryption and Decryption
export function encrypt(data: string, key: string): string {
  const cipher = crypto.createCipher('aes-256-ctr', key);
  let encrypted = cipher.update(data, 'utf8', 'hex');
  encrypted += cipher.final('hex');
  return encrypted;
}

export function decrypt(data: string, key: string): string {
  const decipher = crypto.createDecipher('aes-256-ctr', key);
  let decrypted = decipher.update(data, 'hex', 'utf8');
  decrypted += decipher.final('utf8');
  return decrypted;
}

// Validate Data Schema
export function validateSchema(data: any, schema: Joi.Schema) {
  const { error } = schema.validate(data);
  if (error) {
    throw new Error(`Validation error: ${error.message}`);
  }
}
