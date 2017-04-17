var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");
var models = require("./../models");
var Post = mongoose.model("Post");

router.get("/", (req, res) => {
  Post.find({})
    .populate("author")
    .then(posts => {
      console.log(posts);
      res.render("posts/index", {posts});
    })
    .catch(e => res.status(500).send(e.stack));
});

module.exports = router;
