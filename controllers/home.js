const HomeController = {
  Index: async function (req, res) {
    res.json({ info: "Hello home router" });
  },
  Login: async function (req, res) {
    res.json({ info: "Hello login post router" });
  }
};
module.exports = HomeController;
