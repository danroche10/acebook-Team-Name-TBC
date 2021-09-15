##Acebook

# Create Test Database

In `psql` run the following query:

```
CREATE DATABASE acebook;
CREATE TABLE posts(id SERIAL PRIMARY KEY, message VARCHAR(400))
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

Change the database settings in `database/connection.js` to match your own: typically this involves changing the `user` name.

`node app.js`
