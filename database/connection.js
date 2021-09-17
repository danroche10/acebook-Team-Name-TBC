const Pool = require('pg').Pool;

let dbInfo;

const testDb = {
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_TEST_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
};

const db = {
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
};

if (process.env.TEST === 'test') {
  dbInfo = testDb;
} else {
  dbInfo = db;
}

const pool = new Pool(dbInfo);
module.exports.pool = pool;

// truncate db if env variable is test - do this here, or in globalsetup?
// update readme to include env info - add that 1 line - info on create database
// can we create something that will automatically close the pool when the test is run 