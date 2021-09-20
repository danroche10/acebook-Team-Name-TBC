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
}

module.exports = User;
