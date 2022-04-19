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
router.get("/project/:id", (req, res, next) => {
  const id = req.params.id;
  if (projects[id]) {
    res.render("project", {
      projects: projects[id],
    });
  } else {
    const error = new Error("We couldn't find what you are looking for");
    error.status = 404;
    next(error);
  }
});

module.exports = router;
