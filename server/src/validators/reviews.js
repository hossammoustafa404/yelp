const Joi = require("joi");

// Create Review Object
const createReviewObj = {
  params: Joi.object()
    .keys({
      restaurantId: Joi.string().uuid().required(),
    })
    .min(1),
  body: Joi.object()
    .keys({
      name: Joi.string().required().max(50),
      content: Joi.string().required(),
      rating: Joi.number().required().min(1).max(5),
    })
    .min(1),
};

// Get Single Review Object
const getSingleReviewObj = {
  params: Joi.object()
    .keys({
      reviewId: Joi.string().uuid().required(),
    })
    .min(1),
};

// Update Review Object
const updateReviewObj = {
  params: Joi.object()
    .keys({
      reviewId: Joi.string().uuid().required(),
    })
    .min(1),
  body: Joi.object()
    .keys({
      name: Joi.string().optional().max(50),
      content: Joi.string().optional().min(20),
      rating: Joi.number().optional().min(1).max(5),
    })
    .min(1),
};

// Delete Single Review Object
const deleteReviewObj = {
  params: Joi.object()
    .keys({
      reviewId: Joi.string().uuid().required(),
    })
    .min(1),
};

module.exports = {
  createReviewObj,
  getSingleReviewObj,
  updateReviewObj,
  deleteReviewObj,
};
