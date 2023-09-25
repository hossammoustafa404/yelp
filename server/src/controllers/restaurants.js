const {
  createRestaurantService,
  getAllRestaurantsService,
  getSingleRestaurantService,
  updateSingleRestaurantService,
  updateManyRestaurantService,
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
  const { rows } = await getSingleRestaurantService(req.params.id);

  return res.status(StatusCodes.OK).json({ restaurant: rows[0] });
};

// Get All Restaurants
const getAllRestaurants = async (req, res) => {
  const { rows, rowCount } = await getAllRestaurantsService();

  return res.json({ nbhits: rowCount, restaurants: rows });
};

// Update Single Restuarant
const updateSingleRestaurant = async (req, res) => {
  const { rows } = await updateSingleRestaurantService(req.params.id, req.body);

  return res.status(StatusCodes.OK).json({ restaurant: rows[0] });
};

// Update Many Restaurants
const updateManyRestaurants = async (req, res) => {
  const { rows, rowCount } = await updateManyRestaurantService(
    req.query,
    req.body
  );

  return res
    .status(StatusCodes.OK)
    .json({ nbhits: rowCount, restaurants: rows });
};

// Delete Single Restaurant
const deleteSingleRestaurant = async (req, res) => {
  const result = await deleteSingleRestaurantService(req.params.id);
  return res.status(StatusCodes.NO_CONTENT).send();
};

// Delete Many Restaurants
const deleteManyRestaurants = async (req, res) => {
  res.send("Delete Many Restaurants");
};

module.exports = {
  createSingleRestaurant,
  getSingleRestaurant,
  getAllRestaurants,
  updateSingleRestaurant,
  updateManyRestaurants,
  deleteSingleRestaurant,
  deleteManyRestaurants,
};
