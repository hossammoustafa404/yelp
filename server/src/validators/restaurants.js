const Joi = require("joi");

// Create Single Restaurant
const createSingleRestaurantObj = {
  body: Joi.object()
    .keys({
      name: Joi.string().required().max(50),
      location: Joi.string().required().max(50),
      price_range: Joi.number().required().min(1).max(5),
    })
    .min(1),
};

// Get Single Restaurant
const getSingleRestaurantObj = {
  params: Joi.object()
    .keys({
      restaurantId: Joi.string().uuid().required(),
    })
    .min(1),
};

// Update Single Restaurant
const updateSingleRestaurantObj = {
  params: Joi.object()
    .keys({
      restaurantId: Joi.string().uuid().required(),
    })
    .min(1),

  body: Joi.object()
    .keys({
      name: Joi.string().optional().max(50),
      location: Joi.string().optional().max(50),
      price_range: Joi.number().optional().min(1).max(5),
    })
    .min(1),
};

// Delete Single Restaurant
const deleteSingleRestaurantObj = {
  params: Joi.object()
    .keys({
      restaurantId: Joi.string().uuid().required(),
    })
    .min(1),
};

module.exports = {
  createSingleRestaurantObj,
  getSingleRestaurantObj,
  updateSingleRestaurantObj,
  deleteSingleRestaurantObj,
};
