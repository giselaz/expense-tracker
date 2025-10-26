const Joi = require("joi");

const validateCreateExpense = (body) => {
  const schema = Joi.object({
    description: Joi.string().min(3).required(),
    amount: Joi.number().required(),
    categoryId: Joi.string().required()
  });
  return schema.validate(body);
};
const validateUpdateExpense = (body) => {
  const schema = Joi.object({
    description: Joi.string().min(3),
    amount: Joi.number(),
    categoryId: Joi.string()
  });
  return schema.validate(body);
};
module.exports = { validateCreateExpense, validateUpdateExpense};
