var mongoose = require("mongoose");
// var bluebird = require("bluebird");
var Schema = mongoose.Schema;
var Commentable = require("./commentable");

var CommentSchema = new Schema(
  {
    title: String
  },
  {
    discriminatorKey: "kind"
  }
);

const Comment = Commentable.discriminator("Comment", CommentSchema);

module.exports = Comment;
