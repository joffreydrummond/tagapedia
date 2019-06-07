const router = require("express").Router();
const passport = require("passport");

router.get("/login", (req, res)=> {
    res.render("login");
    })

router.get("/logout", (req, res) => {
  // handle with passport
//   res.send("logging out");
  res.render("index");
//   res.render("index");
});

router.get("/google", passport.authenticate("google", {
    scope: ["profile", "email"]
}))
;

router.get("/google/callback", passport.authenticate("google"), (req, res) => {
    // res.send("You have reached the callback URI")
    res.render("home");
})



module.exports = router;
