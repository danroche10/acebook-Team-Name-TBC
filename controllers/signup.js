const User = require('../model/users');

const signupController = {
  async Index(req, res) {
    res.json({ info: 'Hello sign up router!' });
  },
  async NewUser(req, res) {
    await User.addUser();
    res.json({ info: 'Hello new user sign up post router!' });
  },
};
module.exports = signupController;
