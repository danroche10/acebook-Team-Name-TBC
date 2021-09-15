const HomeController = {
  Index: async function (req, res) {
    res.json({ info: "Hello home router" });
  },
};
module.exports = HomeController;
