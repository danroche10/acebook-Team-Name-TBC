const express = require('express')
const cookieParser = require('cookie-parser')
const app = express()
const port = 3000

app.use(express.json())

app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.get('/', (request, response) => {
  response.json({info: "Node.js, Express, and Postgres API"})
})

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})