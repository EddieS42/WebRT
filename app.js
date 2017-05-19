// requires
var express = require('express');
var app = express();
var bodyParser = require("body-parser");

// setting directory views

app.use(express.static("node_modules"));
app.use(express.static("public"));

// setting app
app.use(bodyParser.urlencoded({extended:true}));

// setting view engine for make ejs standart
app.set("view engine", "ejs");

// database temporária

var matters = [
		{title:"Dia da Sopa", image: "img/matters/dia_sopa.jpg", content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."},
	]

// site routes
app.get("/", function (req, res) {
  res.render("languageSelector");
})

app.get("/landing-PT", function(req,res){
	res.render("landing_PT");
})

app.get("/works-PT", function(req,res){
	res.render("works_PT");
});

// blog routes

app.get("/blog-PT", function(req,res){
	res.render("blog_PT",{matters: matters});
})

app.post("/blog-PT", function(req, res){
	res.send("YOU HIT THe POST ROUTE!")
});

app.get("/blog-PT/new", function(req,res){
	res.render("new.ejs");
});

// running app.js on Port 3000

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
})