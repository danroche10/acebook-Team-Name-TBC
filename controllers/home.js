const url = require('url');
const User = require('../model/users');

const HomeController = {
  async Index(req, res) {
    res.render('home/index');
  },
  async Login(req, res) {
    const username = req.body.user_name;
    const password = req.body.user_password;
    const isUserAuthenticated = await User.authenticate(username, password);
    const userId = isUserAuthenticated.id;
    if (isUserAuthenticated === false) {
      res.redirect('/');
    }
    // Add your authenticated property below:
    req.session.authenticated = true;
    // Add the user object below:
    req.session.user = {
      username,
      userId,
    };
    // console.log(req.session);
    // below is short-term solution until we can properly use express-session
    res.redirect(
      url.format({
        pathname: '/posts',
        query: req.session.user,
      })
    );
  },
};
module.exports = HomeController;
