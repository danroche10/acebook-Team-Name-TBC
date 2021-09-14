const connection = require("../database/connection.js");

class Post {
  constructor(id, message) {
    this.id = id;
    this.message = message;
  }

  static async getPosts() {
    let allPostsArray = [];
    let allPosts = await connection.pool.query(
      "SELECT * FROM posts ORDER BY id ASC"
    );
    allPosts.rows.forEach((element) => {
      allPostsArray.push(new Post(element.id, element.message));
    });
    return allPostsArray;
  }
}

module.exports = Post;
