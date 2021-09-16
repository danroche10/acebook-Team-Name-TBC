const signupController = {
  Index: async function (req, res) {
    res.json({ info: "Hello sign up router!" });
  },
  NewUser: async function (req, res) {
    res.json({ info: "Hello new user sign up post router!" });
  },
};
module.exports = signupController;
