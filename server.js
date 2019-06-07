const express = require("express"),
authRoutes = require("./routes/authRoutes"),
otherRoutes = require("./routes/otherRoutes")
passportSetup = require("./config/passport"),
  app = express(),
  dotenv = require("dotenv"),
  yelp = require("yelp-fusion"),
  yelpApi = dotenv.YELP_API,
  client = yelp.client(yelpApi),
  passport = require("passport"),



// auth(passport);
app.use(passport.initialize());
app.set("view engine", "ejs");
app.use("/auth", authRoutes);
app.use("/", otherRoutes);

app.get("/", (req, res) => {
  res.render("index");
});


app.get("/movies", (req, res) => {
  res.render("movies");
});

app.get("/food", (req, res) => {
  res.render("food");
});

app.get("/music", (req, res) => {
  res.render("music");
});

app.listen(3000, () => {
  console.log("Server Live and Listening on PORT 3000");
});
