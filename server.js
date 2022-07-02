const express = require("express");
const bodyParser = require("body-parser");
const app = express();
require("dotenv").config();

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = process.env.PORT || 3000;

app.use("/", require("./routes"));
app.get("/", function (req, res) {
  res.render("index");
});

app.listen(port, () => {
  console.log("Server email is running at port: ", port);
});
