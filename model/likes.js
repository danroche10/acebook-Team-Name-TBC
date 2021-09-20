const connection = require('../database/connection.js');

const { Connection } = require('pg');

class Like {
  static async getLikeById(id) {
    // sql query to find id
    // return user id, post id from that like
  }

  static async addLike(post_id, user_id) {
    let like = await connection.pool.query(
      'INSERT INTO likes (post_id, user_id) VALUES ($1, $2);',
      [post_id, user_id]
    );
    return like;
  }
}

module.exports = Like;
