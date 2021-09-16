##Acebook

# Create Test Database

In `psql` run the following query:

```
CREATE DATABASE acebook;
CREATE TABLE users(id SERIAL PRIMARY KEY, username VARCHAR(200), password VARCHAR(200), email VARCHAR(200), photo_url VARCHAR(400) DEFAULT null);
CREATE TABLE posts(id SERIAL PRIMARY KEY, text VARCHAR(200), created_at TIMESTAMP DEFAULT now(), user_id integer REFERENCES users(id));
CREATE TABLE comments(id SERIAL PRIMARY KEY, text VARCHAR(200), post_id integer REFERENCES posts(id), user_id integer REFERENCES users(id), created_at TIMESTAMP DEFAULT now());
CREATE TABLE likes(id SERIAL PRIMARY KEY, post_id integer REFERENCES posts(id), user_id integer REFERENCES users(id));
```

You might want to create some test data:

```
INSERT INTO users(username, password, email) VALUES('dandelion', 'Password1', 'test@test.com');
SELECT * FROM users;

INSERT INTO posts(text, created_at, user_id) VALUES('this is our first post', current_timestamp, 1);
SELECT * FROM posts;

INSERT INTO comments(text, post_id, user_id) VALUES('this is the first comment', 1, 1);
SELECT * FROM comments;

INSERT INTO likes(post_id, user_id) VALUES(1, 1);
SELECT * FROM likes;

```

## Install and run program

Make sure you are using node version 14.17.6 (lts)

Clone this repo and navigate to its directory.

`npm install`

In the root directory of the project create a file called `.env` and copy the following (adapt where required):

```
DB_USER=<your_psql_name>
DB_HOST=localhost
DB_DATABASE=acebook
DB_PASSWORD=null
DB_PORT=5432
```

To run the app, run the following command:

`node app.js`

Visit http://localhost:3000/
