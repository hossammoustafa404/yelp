const Joi = require("joi");
const {
  createSingleRestaurant,
  getManyRestaurants,
  getSingleRestaurant,
  updateSingleRestaurant,
  deleteSingleRestaurant,
} = require("../controllers/restaurants");
const validate = require("../middlewares/validate");
const {
  createSingleRestaurantObj,
  updateSingleRestaurantObj,
  deleteSingleRestaurantObj,
  getSingleRestaurantObj,
} = require("../validators/restaurants");
const reviewsRouter = require("./reviews");

const router = require("express").Router();

router.use("/:restaurantId/reviews", reviewsRouter);

router
  .route("/")
  .post(validate(createSingleRestaurantObj), createSingleRestaurant)
  .get(getManyRestaurants);

router
  .route("/:restaurantId")
  .get(validate(getSingleRestaurantObj), getSingleRestaurant)
  .patch(validate(updateSingleRestaurantObj), updateSingleRestaurant)
  .delete(validate(deleteSingleRestaurantObj), deleteSingleRestaurant);

module.exports = router;
