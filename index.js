const path = require("path");
const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");

app.get("/", function (req, res) {
  res.render("index");
});

app.get("/profile/:username", function (req, res) {
  res.send(`Welcome ,${req.params.username}`);
}); //DYNAMIC ROUTING AT IT'S PEAK

app.listen(3000, function () {
  console.log("Server Running at 3000 port..!");
});
