const Pool = require("pg").Pool;
const pool = new Pool({
  user: "edward",
  host: "localhost",
  database: "acebook",
  password: null,
  port: 5432,
});

const getPosts = (request, response) => {
  pool.query("SELECT * FROM posts ORDER BY id ASC", (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

module.exports = {
  getPosts,
};
