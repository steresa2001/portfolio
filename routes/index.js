const express = require("express");
const router = express.Router();
const { data } = require("../data/data.json");
const { projects } = data;

// Set routes
router.get("/", (req, res) => {
  res.render("index", { projects, name: "Steven Gore" });
});
router.get("/about", (req, res) => {
  res.render("about", { name: "Steven Gore", isAboutPage: true });
});
router.get("/project/:id", (req, res) => {
  const id = req.params.id;
  res.render("project", {
    projects: projects[id],
  });
});

module.exports = router;
