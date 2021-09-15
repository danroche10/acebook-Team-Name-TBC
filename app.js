require("dotenv").config();

const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
const port = 3000;
const path = require("path");
// const hbs = require("hbs");

const postsRouter = require("./routes/posts");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// route setup
app.get("/", (request, response) => {
	response.json({ info: "Node.js, Express, and Postgres API" });
}); // this will need homeRouter

app.use("/posts", postsRouter);

app.listen(port, () => {
	console.log(`App running on port ${port}.`);
});
