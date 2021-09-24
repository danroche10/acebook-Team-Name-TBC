## Acebook

# Create Database

In `psql` or `TablePlus` run the following query:

```
CREATE DATABASE acebook;
CREATE TABLE users(id SERIAL PRIMARY KEY, username VARCHAR(200), password VARCHAR(200), email VARCHAR(200), photo_url VARCHAR(400) DEFAULT null);
CREATE TABLE posts(id SERIAL PRIMARY KEY, text VARCHAR(200), created_at TIMESTAMP DEFAULT now(), user_id integer REFERENCES users(id));
CREATE TABLE images (id SERIAL PRIMARY KEY,name VARCHAR(100), pic BYTEA, post_id INT, CONSTRAINT "images_post_id_fkey" FOREIGN KEY ("post_id") REFERENCES "posts"("id"));
CREATE TABLE comments(id SERIAL PRIMARY KEY, text VARCHAR(200), post_id integer REFERENCES posts(id), user_id integer REFERENCES users(id), created_at TIMESTAMP DEFAULT now());
CREATE TABLE likes(id SERIAL PRIMARY KEY, post_id integer REFERENCES posts(id), user_id integer REFERENCES users(id));
```

You might want to create some test data:

```
INSERT INTO users(username, password, email) VALUES("dandelion", "Password1", "test@test.com");
SELECT * FROM users;

INSERT INTO posts(text, created_at, user_id) VALUES("this is our first post", current_timestamp, 1);
SELECT * FROM posts;

INSERT INTO comments(text, post_id, user_id) VALUES("this is the first comment", 1, 1);
SELECT * FROM comments;

INSERT INTO likes(post_id, user_id) VALUES(1, 1);
SELECT * FROM likes;
```

# Create Test Database

REMINDER: make sure the following is in your `.env` file:

```
DB_TEST_DATABASE=acebook_test
```

In `psql` or `TablePlus` run the following query:

```
CREATE DATABASE acebook_test;
CREATE TABLE users(id SERIAL PRIMARY KEY, username VARCHAR(200), password VARCHAR(200), email VARCHAR(200), photo_url VARCHAR(400) DEFAULT null);
CREATE TABLE posts(id SERIAL PRIMARY KEY, text VARCHAR(200), created_at TIMESTAMP DEFAULT now(), user_id integer REFERENCES users(id));
CREATE TABLE images (id SERIAL PRIMARY KEY,name VARCHAR(100), pic BYTEA, post_id INT, CONSTRAINT "images_post_id_fkey" FOREIGN KEY ("post_id") REFERENCES "posts"("id"));
CREATE TABLE comments(id SERIAL PRIMARY KEY, text VARCHAR(200), post_id integer REFERENCES posts(id), user_id integer REFERENCES users(id), created_at TIMESTAMP DEFAULT now());
CREATE TABLE likes(id SERIAL PRIMARY KEY, post_id integer REFERENCES posts(id), user_id integer REFERENCES users(id));
```

## Install and run program (for development)

Make sure you are using node version 14.17.6 (lts)

Clone this repo and navigate to its directory.

`npm install`

In the root directory of the project create a file called `.env` and copy the following (adapt where required):

```
DB_USER=<your_psql_name>
DB_HOST=localhost
DB_DATABASE=acebook
DB_TEST_DATABASE=acebook_test
DB_PASSWORD=null
DB_PORT=5432
```

To install nodemon on your machine, run the following command:

`npm install -g nodemon`

To run the app, run the following command:

`nodemon app.js`

Visit http://localhost:3000/

## Writting tests with Jest

You MUST include `test.js` on any file you want to write tests in.

Make sure to use the old `import/export` syntax. Doesn't work at the moment with ES6.

## Running tests with jest

Run `npm test /spec`.

## installing Cypress

When you run `npm run cypress:open` it will open Cypress and allow you to pick and choose which tests to run, or all.

### Writing tests in Cypress

When writing tests, include `.spec.js` on the end of the test file.
Store these files in `<project-name>/cypress/integration`.

### Running tests with Cypress

`npx cypress open`

**IMPORTANT**
When running cypress tests, make sure you are running your localhost in tandem!
