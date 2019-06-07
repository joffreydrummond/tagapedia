const router = require("express").Router();


router.get("/food", (req, res) => {
    res.render("food");
  });
  
  router.get("/movies", (req, res) => {
    res.render("movies");
  });
  
  router.get("/music", (req, res) => {
    res.render("music");
  });

  module.exports = router;
  