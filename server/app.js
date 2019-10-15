var express = require("express");
var cors = require("cors");
var path = require("path");

var indexRouter = require("./routes/index");
var phonesRouter = require("./routes/phones");

var app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/phones", phonesRouter);

module.exports = app;
