const Joi = require("joi");

// Create Review Object
const createReviewObj = {
  params: {
    restaurantId: Joi.string().uuid().required(),
  },
  body: {
    name: Joi.string().required().max(50),
    content: Joi.string().required(),
    rating: Joi.number().required().min(1).max(5),
  },
};

// Get Single Review Object
const getSingleReviewObj = {
  params: {
    reviewId: Joi.string().uuid().required(),
  },
};

// Get Many Reviews Object
const getManyReviewsObj = {
  query: {
    name: Joi.string().optional().max(50),
    content: Joi.string().optional().min(20),
    rating: Joi.number().optional().min(1).max(5),
  },
};

// Update Review Object
const updateReviewObj = {
  params: {
    reviewId: Joi.string().uuid().required(),
  },
  body: {
    name: Joi.string().optional().max(50),
    content: Joi.string().optional().min(20),
    rating: Joi.number().optional().min(1).max(5),
  },
};

// Delete Single Review Object
const deleteReviewObj = {
  params: {
    reviewId: Joi.string().uuid().required(),
  },
};

module.exports = {
  createReviewObj,
  getSingleReviewObj,
  getManyReviewsObj,
  updateReviewObj,
  deleteReviewObj,
};
