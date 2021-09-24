const connection = require('../database/connection.js');
const User = require('./users.js');

class Post {
  static async getPosts() {
    let allPostsArray = [];
    let allPosts = await connection.pool.query(
      'SELECT * FROM posts ORDER BY id ASC;'
    );
    for (const element of allPosts.rows) {
      // this has to be a for loop not a forEach or the await in the following line won't work
      const newName = await User.getUser(element.user_id);
      const newTime = new Date(element.created_at);
      allPostsArray.push({
        id: element.id,
        message: element.text,
        time: newTime.toLocaleString(),
        name: newName,
      });
    }

    return allPostsArray.reverse();
  }

  static async addPost(text, user_id) {
    let post = await connection.pool.query(
      'INSERT INTO posts (text, user_id) VALUES ($1, $2) RETURNING id;',
      [text, user_id]
    );
    return post;
  }

  static async addImage(name, data, post_id) {
    let post = await connection.pool.query(
      'INSERT INTO images(name, pic, post_id) VALUES ($1, $2, $3) ;',
      [name, data, post_id]
    );
    return post;
  }

  static async getPostById(post_id) {
    let individualPostArray = [];
    let individualPost = await connection.pool.query(
      'SELECT * FROM posts WHERE id = $1',
      [post_id]
    );
    for (const element of individualPost.rows) {
      // this has to be a for loop not a forEach or the await in the following line won't work
      const newName = await User.getUser(element.user_id);
      const newTime = new Date(element.created_at);
      individualPostArray.push({
        id: element.id,
        message: element.text,
        time: newTime.toLocaleString(),
        name: newName,
      });
    }
    return individualPostArray;
  }

  static async getImageById(post_id) {
    let allPicsArray = [];
    let allPics = await connection.pool.query(
      'SELECT pic, post_id FROM images WHERE post_id = $1',
      [post_id]
    );
    allPics.rows.forEach((element) => {
      allPicsArray.push({
        data: element.pic,
        post_id: element.post_id,
      });
    });
    return allPicsArray;
  }

  static async getImages() {
    let allImagesArray = [];
    let allImages = await connection.pool.query('SELECT * FROM images');
    allImages.rows.forEach((element) => {
      allImagesArray.push({
        data: element.pic,
        post_id: element.post_id,
      });
    });
    return allImagesArray;
  }
}

module.exports = Post;
