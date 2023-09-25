const { query } = require("../db");
const { v4: uuid } = require("uuid");
const { NotFoundError, BadRequestError } = require("../lib/errors");

// Create Restaurant
const createRestaurantService = async (createRestaurantObj) => {
  const id = uuid();
  const { name, location, priceRange } = createRestaurantObj;
  const result = await query(
    `INSERT INTO restaurant (id,name,location,price_range) Values ($1, $2,$3,$4) RETURNING *`,
    [id, name, location, priceRange]
  );

  return { ...result };
};

// Get Single Restaurant
const getSingleRestaurantService = async (restaurantId) => {
  const result = await query("SELECT * FROM restaurant WHERE id = $1", [
    restaurantId,
  ]);

  if (!result.rowCount) {
    throw new NotFoundError("Restaurant does not exist");
  }

  return { ...result };
};

// Get Many Restaurants
const getManyRestaurantsService = async (filterQuery) => {
  const result = await query("SELECT * FROM restaurant");
  return { ...result };
};

// Update Single Restaurant
const updateSingleRestaurantService = async (
  restaurantId,
  updateRestaurantObj
) => {
  const setString = Object.keys(updateRestaurantObj)
    .map((key, index) => `${key}=$${index + 2}`)
    .join(", ");

  const result = await query(
    `UPDATE restaurant SET ${setString} WHERE id = $1 RETURNING *`,
    [restaurantId, ...Object.values(updateRestaurantObj)]
  );

  if (!result.rowCount) {
    throw new NotFoundError("Restaurant does not exist");
  }

  return { ...result };
};

// Delete Single Restaurant Service
const deleteSingleRestaurantService = async (restaurantId) => {
  const result = await query("DELETE FROM restaurant WHERE id = $1", [
    restaurantId,
  ]);
  return { ...result };
};

module.exports = {
  createRestaurantService,
  getManyRestaurantsService,
  getSingleRestaurantService,
  updateSingleRestaurantService,
  deleteSingleRestaurantService,
};
