var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");
var models = require("./../models");
var User = mongoose.model("User");

// ----------------------------------------
// Index
// ----------------------------------------
router.get("/", (req, res) => {
  // User.find({})
  //   .then(users => {
  //     res.render("users/index", {users});
  //   })
  //   .catch(e => res.status(500).send(e.stack));
  res.render("users/index")
});

module.exports = router;
