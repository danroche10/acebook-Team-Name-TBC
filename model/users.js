const connection = require('../database/connection.js');

class User {
  static async addUser(username, password, email) {
    await connection.pool.query(
     );
    let user = {username: username, password: password, email: email}
    return user;
  }
}

module.exports = User;
