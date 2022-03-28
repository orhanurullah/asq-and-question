const express = require("express");
const mongoose = require("mongoose");
const pageController = require('./controllers/pageController');

const app = express();

mongoose
  .connect("mongodb://localhost/ask_question")
  .then(() => {
    console.log("DB connected");
  })
  .catch((err) => {
    console.log("DB connection error", err);
  });
// set ejs
app.set("view engine", "ejs");
// middlewares
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


//routes
app.get('/', pageController.getIndexPage);


const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`The application is starting ${port} on port`);
});

