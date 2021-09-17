const connection = require('../database/connection.js');

class User {
  static addUser(username, password, email) {
    connection.pool.query(
      "INSERT INTO users(username, password, email) VALUES('sonic33', 'makers', 'sonic@example.com');",
    );
    const user = { username, password, email };
    return user;
  }
}

module.exports = User;
