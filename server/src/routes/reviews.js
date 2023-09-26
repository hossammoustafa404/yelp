const validate = require("../middlewares/validate");

const {
  getManyReviews,
  createSingleReview,
  updateSingleReview,
  getSingleReview,
  deleteSingleReview,
} = require("../controllers/reviews");
const {
  createReviewObj,
  updateReviewObj,
  getSingleReviewObj,
  deleteReviewObj,
} = require("../validators/reviews");

const router = require("express").Router({ mergeParams: true });

router
  .route("/")
  .post(validate(createReviewObj), createSingleReview)
  .get(getManyReviews);
router
  .route("/:reviewId")
  .get(validate(getSingleReviewObj), getSingleReview)
  .patch(validate(updateReviewObj), updateSingleReview)
  .delete(validate(deleteReviewObj), deleteSingleReview);

module.exports = router;
