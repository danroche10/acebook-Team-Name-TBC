const connection = require('../database/connection.js');

class User {
  static addUser(username, password, email) {
    connection.pool.query(
      'INSERT INTO users(username, password, email) VALUES($1, $2, $3) RETURNING id, username, email;',
      [username, password, email]
    );
    const user = { username, password, email };
    return user;
  }

  static async authenticate(username, password) {
    const result = await connection.pool.query(
      'SELECT * FROM users WHERE username = $1',
      [username],
    );
    if (result.rows.length === 0) {
      return false;
    }
    if (result.rows[0].password !== password) {
      return false;
    }
    return {
      id: result.rows[0].id,
      username: result.rows[0].username,
      email: result.rows[0].email,
    };
  }
}
module.exports = User;