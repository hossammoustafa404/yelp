const Joi = require("joi");
const {
  createSingleRestaurant,
  getAllRestaurants,
  getSingleRestaurant,
  updateSingleRestaurant,
  deleteSingleRestaurant,
  updateManyRestaurants,
  deleteManyRestaurants,
} = require("../controllers/restaurants");
const validate = require("../middlewares/validate");
const {
  createSingleRestaurantObj,
  updateSingleRestaurantObj,
  updateManyRestaurantsObj,
  deleteSingleRestaurantObj,
} = require("../validators/restaurants");

const router = require("express").Router();

router
  .route("/")
  .post(validate(createSingleRestaurantObj), createSingleRestaurant)
  .get(getAllRestaurants)
  .patch(validate(updateManyRestaurantsObj), updateManyRestaurants)
  .delete(deleteManyRestaurants);

router
  .route("/:id")
  .get(getSingleRestaurant)
  .patch(validate(updateSingleRestaurantObj), updateSingleRestaurant)
  .delete(validate(deleteSingleRestaurantObj), deleteSingleRestaurant);

module.exports = router;
