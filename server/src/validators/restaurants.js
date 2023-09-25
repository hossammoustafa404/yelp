const Joi = require("joi");

// Create Single Restaurant
const createSingleRestaurantObj = {
  body: {
    name: Joi.string().required().max(50),
    location: Joi.string().required().max(50),
    price_range: Joi.number().required().min(1).max(5),
  },
};

// Update Single Restaurant
const updateSingleRestaurantObj = {
  params: {
    id: Joi.string().uuid().required(),
  },
  body: {
    name: Joi.string().optional().max(50),
    location: Joi.string().optional().max(50),
    price_range: Joi.number().optional().min(1).max(5),
  },
};

// Delete Single Restaurant
const deleteSingleRestaurantObj = {
  params: {
    id: Joi.string().uuid().required(),
  },
};

module.exports = {
  createSingleRestaurantObj,
  updateSingleRestaurantObj,
  deleteSingleRestaurantObj,
};
