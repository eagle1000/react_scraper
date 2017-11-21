const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3001;
const app = express();

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Set up promises with mongoose
mongoose.Promise = global.Promise;
// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/nytreact",
  {
    useMongoClient: true
  }
);
// Require Database models
const db = require("./models")
const {Article} = db


// Routes


app.post("/api/saved", (req, res) => {
	var article = req.body
	Article.create(article)
	.then(() => {
		res.json(article)
	})
	.catch((err) => {
		res.json(err)
	})
})

app.get("/api/saved", (req, res) => {
	Article.find({}).then(articles => res.json(articles))
})

app.delete("/api/saved", (req, res) => {
  Article.remove(req.body)
  .then(articles =>
  	res.json(articles))
  })


// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
