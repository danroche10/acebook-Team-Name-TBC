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
      const user_id = newUser.rows[0].id;
      req.session.authenticated = true;
      // Add the user object below:
      req.session.user = {
        username,
        user_id,
      };
      return res.redirect('/posts');
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },
};
module.exports = signupController;
