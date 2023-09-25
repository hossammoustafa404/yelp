const {
  createRestaurantService,
  getManyRestaurantsService,
  getSingleRestaurantService,
  updateSingleRestaurantService,
  deleteSingleRestaurantService,
} = require("../services/restaurants");
const { StatusCodes } = require("http-status-codes");

// Create Single Restaurant
const createSingleRestaurant = async (req, res) => {
  const { rows } = await createRestaurantService(req.body);
  return res.status(StatusCodes.CREATED).json({ restaurant: rows[0] });
};

// Get Single Restaurant
const getSingleRestaurant = async (req, res) => {
  const { rows } = await getSingleRestaurantService(req.params.restaurantId);

  return res.status(StatusCodes.OK).json({ restaurant: rows[0] });
};

// Get Many Restaurants
const getManyRestaurants = async (req, res) => {
  const { rows, rowCount } = await getManyRestaurantsService();

  return res.json({ nbhits: rowCount, restaurants: rows });
};

// Update Single Restuarant
const updateSingleRestaurant = async (req, res) => {
  const { rows } = await updateSingleRestaurantService(
    req.params.restaurantId,
    req.body
  );

  return res.status(StatusCodes.OK).json({ restaurant: rows[0] });
};

// Delete Single Restaurant
const deleteSingleRestaurant = async (req, res) => {
  const result = await deleteSingleRestaurantService(req.params.restaurantId);
  return res.status(StatusCodes.NO_CONTENT).send();
};

module.exports = {
  createSingleRestaurant,
  getSingleRestaurant,
  getManyRestaurants,
  updateSingleRestaurant,
  deleteSingleRestaurant,
};
