require('dotenv').config();

const express = require('express');

const app = express();
const path = require('path');
const cookieParser = require('cookie-parser');
const session = require('express-session');

const store = new session.MemoryStore();
app.set('trust proxy', 1);
const port = 3000;

const homeRouter = require('./routes/home');
const postsRouter = require('./routes/posts');
const signupRouter = require('./routes/signup');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(
  session({
    secret: 'f4z4gs$Gcg',
    cookie: { maxAge: 300000000, secure: true, sameSite: 'none' },
    saveUninitialized: false,
    resave: false,
    store,
  }),
);

// route paths to match excel file
app.use('/', homeRouter);
app.use('/posts', postsRouter);
app.use('/signup', signupRouter);

app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});
