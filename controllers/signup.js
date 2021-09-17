const User = require('../model/users');

const signupController = {
  async Index(req, res) {
    res.render('signup/index');
  },
  async NewUser(req, res) {
    //const Username = document.querySelector("#newUsername")
    
    User.addUser('test', 'test', 'test');
    res.json({ info: 'Hello new user sign up post router!' });
  },
};
module.exports = signupController;
