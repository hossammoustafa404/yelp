require("dotenv").config();
const Joi = require("joi");

const configSchema = Joi.object()
  .keys({
    // App
    PORT: Joi.string().required(),

    // Database
    PG_HOST: Joi.string().required(),
    PG_DATABASE: Joi.string().required(),
    PG_PORT: Joi.string().required(),
    PG_USERNAME: Joi.string().required(),
    PG_PASSWORD: Joi.string().required(),
  })
  .unknown();

const { value: envVars, error } = configSchema.validate(process.env);

if (error) {
  throw error;
}

const config = {
  // App
  app: {
    env: envVars.NODE_ENV,
    port: envVars.PORT || 5000,
  },

  // Database
  db: {
    host: envVars.PG_HOST,
    database: envVars.PG_DATABASE,
    port: envVars.PG_PORT,
    username: envVars.PG_USERNAME,
    password: envVars.PG_PASSWORD,
  },
};

module.exports = config;
