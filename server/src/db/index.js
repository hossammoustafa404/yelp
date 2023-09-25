const { Pool } = require("pg");
const config = require("../config/config");

const pool = new Pool({
  host: config.db.host,
  database: config.db.database,
  port: config.db.port,
  user: config.db.username,
  password: config.db.password,
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};
