const connection = require('../database/connection.js');

class Post {
  static async getPosts() {
    let allPostsArray = [];
    let allPosts = await connection.pool.query(
      'SELECT * FROM posts ORDER BY id ASC'
    );
    allPosts.rows.forEach((element) => {
      allPostsArray.push({
        id: element.id,
        message: element.text,
        user_id: element.user_id, // have added this for likes function
      });
    });
    return allPostsArray.reverse();
  }

  static async addPost(text, user_id) {
    let post = await connection.pool.query(
      'INSERT INTO posts (text, user_id) VALUES ($1, $2) ;',
      [text, user_id]
    );
    return post;
  }
}

module.exports = Post;
