const express = require("express");
const bodyParser = require("body-parser");
const app = express();
require("dotenv").config();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = process.env.PORT || 3000;

app.use("/", require("./routes"));

app.listen(port, () => {
  console.log("Server nodemailer is running at port: ", port);
});
