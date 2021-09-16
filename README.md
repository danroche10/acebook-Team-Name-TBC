##Acebook

# Create Test Database

In `psql` run the following query:

```
CREATE DATABASE acebook;
CREATE TABLE users(id SERIAL PRIMARY KEY, username VARCHAR(200), password VARCHAR(200), email VARCHAR(200), photo_url VARCHAR(400) DEFAULT null);
CREATE TABLE posts(id SERIAL PRIMARY KEY, message VARCHAR(200), created_at TIMESTAMP, user_id integer REFERENCES users(id));
CREATE TABLE likes(id SERIAL PRIMARY KEY, post_id integer REFERENCES posts(id), user_id integer REFERENCES users(id));

```

You might want to create a test message:

```
SELECT * FROM posts;
INSERT INTO posts(message) VALUES('this is our first message');

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
