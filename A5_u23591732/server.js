const express = require("express");

const app = express();

app.use(express.static("public"));

app.listen(1350, () => {
console.log("Listening on localhost:1350");
});