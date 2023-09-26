const { v4: uuid } = require("uuid");
const { query } = require("../db");
const { NotFoundError } = require("../lib/errors");

// Create Review Service
const createReviewService = async (restaurantId, createReviewObj) => {
  const reviewId = uuid();
  const { name, content, rating } = createReviewObj;

  const result = await query(
    "INSERT INTO review (id,restaurant_id,name,content,rating) VALUES ($1,$2,$3,$4,$5) RETURNING *",
    [reviewId, restaurantId, name, content, rating]
  );

  return { ...result };
};

// Get Single Review Service
const getSingleReviewService = async (reviewId) => {
  const result = await query("SELECT * FROM review WHERE id = $1", [reviewId]);

  if (!result.rowCount) {
    throw new NotFoundError("Review does not exist");
  }

  return { ...result };
};

// Get Many Reviews Service
const getManyReviewsService = async (restaurant_id) => {
  const result = await query(`SELECT * FROM review WHERE restaurant_id = $1`, [
    restaurant_id,
  ]);

  return { ...result };
};

// Update Single Review Service
const updateSingleReviewService = async (reviewId, updateReviewObj) => {
  const setString = Object.keys(updateReviewObj)
    .map((key, index) => `${key}=$${index + 2}`)
    .join(", ");

  const result = await query(
    `UPDATE review SET ${setString} WHERE id = $1 RETURNING *`,
    [reviewId, ...Object.values(updateReviewObj)]
  );

  if (!result.rowCount) {
    throw new NotFoundError("Review does not exist");
  }
  
  return { ...result };
};

// Delete Single Review Service
const deleteSingleReviewService = async (reviewId) => {
  const result = await query("DELETE FROM review WHERE id = $1", [reviewId]);

  return { ...result };
};

module.exports = {
  createReviewService,
  getSingleReviewService,
  getManyReviewsService,
  updateSingleReviewService,
  deleteSingleReviewService,
};
