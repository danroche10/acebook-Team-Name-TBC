require("dotenv").config();

const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
const port = 3000;

const homeRouter = require("./routes/home");
const postsRouter = require("./routes/posts");
const signupRouter = require("./routes/signup");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// route setup
app.get("/", (request, response) => {
  response.json({ info: "Node.js, Express, and Postgres API" });
});

// route paths to match excel file
app.use("/", homeRouter);
app.use("/posts", postsRouter);
app.use("/signup", signupRouter);

app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});
