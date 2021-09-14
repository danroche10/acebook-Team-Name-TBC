const Pool = require("pg").Pool;
const pool = new Pool({
  user: "edward",
  host: "localhost",
  database: "acebook",
  password: null,
  port: 5432,
});

module.exports.pool = pool;
