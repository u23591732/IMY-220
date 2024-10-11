"use strict";

var express = require("express");
var app = express();
app.use(express["static"]("public"));
app.listen(1350, function () {
  console.log("Listening on localhost:1350");
});