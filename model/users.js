const connection = require('../database/connection.js');

class User {
  static addUser(username, password, email) {
    connection.pool.query(
      "INSERT INTO users(username, password, email) VALUES('sonic', 'makers', 'sonic@example.com');"
   );
    const user = { username: username, password: password, email: email };
    return user;
  }
}

module.exports = User;
