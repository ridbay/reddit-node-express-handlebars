const express = require("express");
const bodyParser = require("body-parser")
// const Handlebars = require("handlebars");
const expressHandlebars = require("express-handlebars")

const app = express();

app.use(bodyParser.urlencoded({extended: true}))

app.engine("handlebars", expressHandlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.get("/", (req, res)=>{
    // res.send("Hello, This is Reddit");
    res.render("home")
})

app.listen(5000, ()=>{
    console.log("Reddit is running on port 5000")
})