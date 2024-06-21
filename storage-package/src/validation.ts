import Joi from 'joi';

export const validateSchema = (data: any, schema: Joi.Schema) => {
  const { error } = schema.validate(data);
  if (error) {
    throw new Error(`Validation error: ${error.message}`);
  }
};
