const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.port || 3000;

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false
});

app.use(require("./routes"));

app.listen(PORT, () => {
  console.log(`Now listening on port ${PORT}`);
});