## Acebook

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

## Install and run program (for development)

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

To install nodemon on your machine, run the following command:

`npm install -g nodemon`

To run the app, run the following command:

`nodemon app.js`

Visit http://localhost:3000/
