const { Pool } = require('pg');

// Connect to DB
const pool = new Pool({
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOSTNAME,
    PORT: process.env.DB_PORT,
    database: process.env.DB_DATABASE_NAME
})

/*
console.log(pool, {
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOSTNAME,
  PORT: process.env.DB_PORT,
  database: process.env.DB_DATABASE_NAME
});
*/

module.exports = pool;