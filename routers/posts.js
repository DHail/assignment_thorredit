var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");
var models = require("./../models");
var User = mongoose.model("User");

router.get("/", (req, res) => {
  Post.find({})
    .then(posts => {
      res.render("posts/index", {posts});
    })
    .catch(e => res.status(500).send(e.stack));
});
