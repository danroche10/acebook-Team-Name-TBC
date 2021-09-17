const connection = require('../database/connection.js');

class User {
  static async addUser(username, password, email) {
    await connection.pool.query(
      "INSERT INTO users(username, password, email) VALUES('sonic', 'makers', 'sonic@example.com');"
    );
    const user = { username, password, email };
    return user;
  }
}

module.exports = User;
