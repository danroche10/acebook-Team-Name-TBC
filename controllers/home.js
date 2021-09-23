const User = require('../model/users');

const HomeController = {
  async Index(req, res) {
    res.render('home/index');
  },
  async Login(req, res) {
    try {
      const username = req.body.user_name;
      const password = req.body.user_password;
      const isUserAuthenticated = await User.authenticate(username, password);
      const user_id = isUserAuthenticated.id;
      if (isUserAuthenticated === false) {
        res.redirect('/');
      }
      // Add your authenticated property below:
      req.session.authenticated = true;
      // Add the user object below:
      req.session.user = {
        username,
        user_id,
      };
      res.redirect('/posts')
    } catch (error) {
      console.log(error.message);
    }
  },
  async Logout(req, res) {
    console.log('1st log', req.session)
    res.json({ info: 'Hello logout router!' });
    req.session.destroy();
    console.log('2nd log', req.session)
    res.redirect('/');
    }
};
module.exports = HomeController;
