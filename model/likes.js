const connection = require('../database/connection.js');

const { Connection } = require('pg');

class Like {
  static async getLikeById(id) {
    let like = await connection.pool.query(
      `SELECT post_id, user_id FROM likes WHERE id = ${id};`
    );
    return like.rows[0];
  }

  static async addLike(post_id, user_id) {
    let like = await connection.pool.query(
      'INSERT INTO likes (post_id, user_id) VALUES ($1, $2);',
      [post_id, user_id]
    );
    return like;
  }
}
SELECT id FROM likes WHERE post_id = 3;
module.exports = Like;
