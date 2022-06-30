const express = require("express");
const app = express();
const morgan = require("morgan");
const route = express.Router();
const { authRouter } = require("./auth/auth.router");
const port = 8000;

//set respond json
app.use(express.json());

//set view, css
app.use(express.static(__dirname + "/public/chapter3"));
app.use(express.static(__dirname + "/public/chapter4"));
app.set("view engine", "html");
app.engine("html", require("ejs").renderFile);
app.set("views", "./views");

//using morgan as middleware
app.use(morgan("tiny"));

//route to home page
app.get("/", (req, res) => {
  res.render("chapter3/index");
});

//route to game page
app.get("/rock-paper-scissors-game", (req, res) => {
  res.render("chapter4/index");
});

//route to login
app.use(authRouter);

app.listen(port, () =>
  console.log("> Server is up and running on port : " + port)
);
