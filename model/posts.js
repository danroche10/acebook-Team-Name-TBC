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
        //user_id: element.user_id, // have added this for likes function
      });
    });
    return allPostsArray.reverse();
  }

  static async addPost(text, user_id) {
    let post = await connection.pool.query(
      'INSERT INTO posts (text, user_id) VALUES ($1, $2);',
      [text, user_id]
    );
    return post;
  }

  static async addImage(name, data, post_id) {
    let post = await connection.pool.query(
      'INSERT INTO images(name, pic, user_id) VALUES ($1, $2, $3);',
      [name, data, post_id]
    );
    return post;
  }

  static async getPostById(post_id) {
    let individualPostArray = []
    let individualPost = await connection.pool.query(
      'SELECT * FROM posts WHERE id = $1',[post_id]
    );
    individualPost.rows.forEach((element) => {
      individualPostArray.push({ id: element.id, message: element.text });
    });
    return individualPostArray
  }
}



module.exports = Post;
