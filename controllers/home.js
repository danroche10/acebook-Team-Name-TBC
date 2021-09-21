const User = require('../model/users');

const HomeController = {
  async Index(req, res) {
    console.log(req.session);
    res.render('home/index');
  },
  async Login(req, res) {
    const username = req.body.user_name;
    const password = req.body.user_password;
    const isUserAuthenticated = await User.authenticate(username, password);
    if (isUserAuthenticated === false) {
      res.redirect('/');
    }
    res.redirect('/posts');
  },
};
module.exports = HomeController;
