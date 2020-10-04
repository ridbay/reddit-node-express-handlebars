const Post = require("../models/post");

module.exports = function (app) {
  app.get("/", (req, res) => {
    Post.find()
      .then((posts) => {
        res.render("home", { posts: posts });
      })
      .catch((err) => {
        console.log(err);
      });
  });

  app.get("/posts/new", (req, res) => {
    res.render("posts-new");
  });
  app.post("/posts/new", (req, res) => {

    Post.create(req.body)
      .then((post) => {
        // res.redirect(`/reviews/${review._id}`);
        console.log(post)
      })
      .catch((err) => {
        console.log(err.message);
      });
  });
};
