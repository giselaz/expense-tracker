const Joi = require("joi");

const validateCreateCategory = (body) => {
  const schema = Joi.object({
    name: Joi.string().min(3).required(),
  });
  return schema.validate(body);
};
const validateUpdateCategory = (body) => {
  const schema = Joi.object({
    name: Joi.string().min(3),
  });
  return schema.validate(body);
};
module.exports = { validateCreateCategory,validateUpdateCategory};