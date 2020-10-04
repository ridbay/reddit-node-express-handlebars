const express = require("express");
const bodyParser = require("body-parser")
// const Handlebars = require("handlebars");
const expressHandlebars = require("express-handlebars");
const mongoose = require("mongoose");

const app = express();

app.use(bodyParser.urlencoded({extended: true}))

app.engine("handlebars", expressHandlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
mongoose.connect("mongodb://localhost/reddit", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// app.get("/", (req, res)=>{
//     // res.send("Hello, This is Reddit");
//     res.render("home")
// })

// app.get("/posts/new", (req,res)=>{
//     res.render("posts-new")
// })
const reviews = require("./controllers/posts")(app);

app.listen(5000, ()=>{
    console.log("Reddit is running on port 5000")
})