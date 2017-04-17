const MULTIPLIER = 6;

module.exports = () => {
  // ----------------------------------------
  // Create Users
  // ----------------------------------------
  console.log("Creating Users");
  var users = [];
  for (let i = 0; i < MULTIPLIER * 2; i++) {
    var user = new User({
      fname: "Foo",
      lname: "Bar",
      username: `foobar${i}`,
      email: `foobar${i}@gmail.com`
    });
    users.push(user);
  }

  console.log("Saving...");
  var promises = [];
  [users].forEach(collection => {
    collection.forEach(model => {
      promises.push(model.save());
    });
  });
  return Promise.all(users);
};

var posts = [];
for (let i = 0; i < MULTIPLIER * 2; i++) {
  var post = new Post({
    title: `Foobie${i}`,
    body: `Lorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit amet`
  });
}
