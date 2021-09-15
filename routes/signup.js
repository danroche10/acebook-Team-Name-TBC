const express = require('express')
const signupRouter = express.Router();

const signupController = require('../controllers/signup')
signupRouter.get('/', signupController.Index);

module.exports = signupRouter;

