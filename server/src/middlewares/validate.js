const Joi = require("joi");
const pick = require("../lib/pick");
const { BadRequestError } = require("../lib/errors");

const validate = (schemaObj) => (req, res, next) => {
  const toValidateObj = pick(schemaObj, req);

  const validSchema = Joi.compile(schemaObj);
  const { value, error } = validSchema.validate(toValidateObj, {
    abortEarly: false,
  });

  if (error) {
    throw new BadRequestError(error.message);
  }

  next();
};

module.exports = validate;
