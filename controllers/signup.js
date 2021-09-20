const User = require('../model/users');

const signupController = {
  async Index(req, res) {
    res.render('signup/index');
  },
  async NewUser(req, res) {
    try {
      const { newHandle } = req.body;
      const { newPassword } = req.body;
      const { newEmail } = req.body;
      User.addUser(newHandle, newPassword, newEmail);
      res.redirect('/posts');
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },
};
module.exports = signupController;
