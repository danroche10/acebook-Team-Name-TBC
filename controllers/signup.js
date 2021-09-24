const User = require('../model/users');

const signupController = {
  async Index(req, res) {
    res.render('signup/index');
  },
  async NewUser(req, res) {
    try {
      const username = req.body.newHandle;
      const password = req.body.newPassword;
      const email = req.body.newEmail;
      const newUser = await User.addUser(username, password, email);
      const userId = newUser.rows[0].id;
      req.session.authenticated = true;
      // Add the user object below:
      req.session.user = {
        username,
        userId,
      };
      return res.redirect('/posts');
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },
};
module.exports = signupController;
