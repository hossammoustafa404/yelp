const { StatusCodes } = require("http-status-codes");
const {
  createReviewService,
  getSingleReviewService,
  getManyReviewsService,
  updateSingleReviewService,
  deleteSingleReviewService,
} = require("../services/reviews");

// Create Single Review
const createSingleReview = async (req, res) => {
  const { rows } = await createReviewService(req.params.restaurantId, req.body);

  return res.status(StatusCodes.CREATED).json({ review: rows[0] });
};

// Get Single Review
const getSingleReview = async (req, res) => {
  const { rows } = await getSingleReviewService(req.params.reviewId);

  return res.status(StatusCodes.OK).json({ review: rows[0] });
};

// Get Many Reviews
const getManyReviews = async (req, res) => {
  const { rowCount, rows } = await getManyReviewsService(req.query);

  return res.status(StatusCodes.OK).json({ nbhits: rowCount, reviews: rows });
};

// Update Single Review
const updateSingleReview = async (req, res) => {
  const { rows } = await updateSingleReviewService(
    req.params.reviewId,
    req.body
  );

  return res.status(StatusCodes.OK).json({ review: rows[0] });
};

// Delete Single Review
const deleteSingleReview = async (req, res) => {
  const result = await deleteSingleReviewService(req.params.reviewId);
  return res.status(StatusCodes.NO_CONTENT).send();
};

module.exports = {
  createSingleReview,
  getSingleReview,
  getManyReviews,
  updateSingleReview,
  deleteSingleReview,
};
