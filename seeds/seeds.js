const MULTIPLIER = 6;

module.exports = () => {
  // ----------------------------------------
  // Create Users
  // ----------------------------------------
  console.log("Creating Users");
  var users = [];
  for (let i = 0; i < MULTIPLIER * 3; i++) {
    var user = new User({
      fname: "Foo",
      lname: "Bar",
      username: `foobar${i}`,
      email: `foobar${i}@gmail.com`
    });
    users.push(user);
  }
  //seed comments
  var comments = [];
  for (let i = 0; i < MULTIPLIER * 3; i++) {
    var comment = new Comment({
      title: `Foobie${i}`,
      body: `Lorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit amet`,
      author: users[1],
      comment: [],
      score: i
    });
    comments.push(comment);
  }
  //seed posts
  var posts = [];
  for (let i = 0; i < MULTIPLIER * 3; i++) {
    var post = new Post({
      title: `Foobie${i}`,
      body: `Lorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit amet`,
      author: users[1],
      comment: comments[1],
      score: i
    });
    posts.push(post);
  }

  console.log("Saving...");
  var promises = [];
  [users, comments, posts].forEach(collection => {
    collection.forEach(model => {
      promises.push(model.save());
    });
  });
  return Promise.all(promises);
};
