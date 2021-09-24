const User = require('../model/users');

const HomeController = {
  async Index(req, res) {
    res.render('home/index');
  },
  async Login(req, res) {
    try {
      const { user_name } = req.body;
      const password = req.body.user_password;
      const isUserAuthenticated = await User.authenticate(user_name, password);
      const userId = isUserAuthenticated.id;
      if (isUserAuthenticated === false) {
        res.redirect('/');
      }
      // Add your authenticated property below:
      req.session.authenticated = true;
      // Add the user object below:
      req.session.user = {
        user_name,
        userId,
      };
      return res.redirect('/posts');
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },
  Logout(req, res) {
    req.session.destroy();
    res.redirect('/');
  },
};
module.exports = HomeController;
