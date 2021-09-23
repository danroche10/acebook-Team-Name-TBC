const connection = require('../database/connection.js');
const User = require('./users.js');

class Comment {
  static async getComments(post_id) {
    let allCommentArray = [];
    let allComments = await connection.pool.query(
      'SELECT * FROM comments WHERE post_id = $1',
      [post_id]
    );
    for (const element of allComments.rows) {
      const newName = await User.getUser(element.user_id);
      const newTime = new Date(element.created_at);
      allCommentArray.push({
        id: element.id,
        comment: element.text,
        name: newName,
        time: newTime.toLocaleString(),
      });
    }
    return allCommentArray;
  }

  static async addComment(text, user_id, post_id) {
    let comment = await connection.pool.query(
      'INSERT INTO comments (text, user_id, post_id) VALUES ($1, $2, $3);',
      [text, user_id, post_id]
    );
    return comment;
  }
}

module.exports = Comment;
