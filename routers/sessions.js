var url = require("url");
var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");
var models = require("./../models");
var User = mongoose.model("User");

module.exports = app => {
  // Auth
  app.use((req, res, next) => {
    var reqUrl = url.parse(req.url);
    if (
      !req.session.username &&
      !["/", "/login", "/sessions"].includes(reqUrl.pathname)
    ) {
      res.redirect("/login");
    } else {
      next();
    }
  });

  // New
  var onNew = (req, res) => {
    if (req.session.username) {
      res.redirect("users");
    } else {
      res.render("sessions/new");
    }
  };
  router.get("/", onNew);
  router.get("/login", onNew);

  // Create
  router.post("/sessions", (req, res) => {
    req.session.username = req.body.username;
    req.session.email = req.body.email;
    res.redirect("/users");
  });

  // Destroy
  var onDestroy = (req, res) => {
    req.session.username = null;
    res.redirect("/login");
  };
  router.get("/logout", onDestroy);
  router.delete("/logout", onDestroy);

  return router;
};
