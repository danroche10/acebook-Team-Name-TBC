##Acebook

# Create Test Database

In `psql` run the following query:

```
CREATE DATABASE acebook;
CREATE TABLE posts(id SERIAL PRIMARY KEY, message VARCHAR(400));
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

## Writting tests

You MUST include `test.js` on any file you want to write tests in.

Make sure to use the old `import/export` syntax. Doesn't work at the moment with ES6.

## Running tests with jest

Run `npm install --save-dev jest` in the command line.
Add the following section to your `package.json`:

```
{
  "scripts": {
    "test": "jest"
  }
}
```

In the command line run `npm test`.

