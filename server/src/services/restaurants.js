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
const getSingleRestaurantService = async (id) => {
  const result = await query("SELECT * FROM restaurant WHERE id = $1", [id]);

  if (!result.rowCount) {
    throw new NotFoundError("Restaurant does not exist");
  }

  return { ...result };
};

// Get All Restaurants
const getAllRestaurantsService = async (filterQuery) => {
  const result = await query("SELECT * FROM restaurant");
  return { ...result };
};

// Update Single Restaurant
const updateSingleRestaurantService = async (id, updateRestaurantObj) => {
  const setString = Object.keys(updateRestaurantObj)
    .map((key, index) => `${key}=$${index + 2}`)
    .join(", ");

  const result = await query(
    `UPDATE restaurant SET ${setString} WHERE id = $1 RETURNING *`,
    [id, ...Object.values(updateRestaurantObj)]
  );

  if (!result.rowCount) {
    throw new NotFoundError("Restaurant does not exist");
  }

  return { ...result };
};

// Update Many Restaurants Service
const updateManyRestaurantService = async (
  filterQuery,
  updateManyRestaurantsObj
) => {
  if (!Object.keys(filterQuery).length) {
    throw new BadRequestError("At least one query must be provided");
  }

  const setString = Object.keys(updateManyRestaurantsObj)
    .map((key, index) => `${key}=$${index + 1}`)
    .join(", ");

  const whereString = Object.keys(filterQuery)
    .map((key, index) => `${key}=$${index + setString.split(",").length + 1}`)
    .join(" AND ");

  console.log(whereString);

  const result = await query(
    `UPDATE restaurant SET ${setString} WHERE ${whereString} RETURNING *`,
    [...Object.values(updateManyRestaurantsObj), ...Object.values(filterQuery)]
  );

  return { ...result };
};

// Delete Single Restaurant Service
const deleteSingleRestaurantService = async (id) => {
  const result = await query("DELETE FROM restaurant WHERE id = $1", [id]);
  return { ...result };
};

module.exports = {
  createRestaurantService,
  getAllRestaurantsService,
  getSingleRestaurantService,
  updateSingleRestaurantService,
  updateManyRestaurantService,
  deleteSingleRestaurantService,
};
