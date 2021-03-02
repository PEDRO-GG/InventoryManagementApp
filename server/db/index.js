const { Pool } = require("pg");

const pool = new Pool(); //Automatically looks in .env folder for our info

module.exports = {
  query: (text, params) => pool.query(text, params),
};
