"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateSchema = void 0;
const validateSchema = (data, schema) => {
    const { error } = schema.validate(data);
    if (error) {
        throw new Error(`Validation error: ${error.message}`);
    }
};
exports.validateSchema = validateSchema;
