const Pool = require('pg').Pool;

// can we pass different db/test db names to line 5 param?)

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE, // if env variable is test, change this
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

module.exports.pool = pool;

// create a global set up module that runs before jest tests and sets env variable to test

// truncate db if env variable is test - do this here, or in globalsetup?
