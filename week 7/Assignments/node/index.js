var express = require("express");
// const { re } = require("mathjs");
// const { re } = require("mathjs");
var app = express();
var math = require("./math");

app.get("/sum/:num1/:num2", function (req, res) {
  // console.log(math.sum(a,b))
  res.send("Sum=" + (parseInt(req.params.num1) + parseInt(req.params.num2)));
});
app.get("/diff/:num1/:num2", function (req, res) {
    console.log(req.query)
  res.send(`diff = ${req.params.num1 - req.params.num2}`);
});

app.get("/mul/:num1/:num2", function (req, res) {
  res.status(200).send(math.multiply(req.params.num1, req.params.num2));
});
app.get("/div/:num1/:num2", function (req, res) {
  res.status(200).send(math.division(req.params.num1, req.params.num2));
});

app.listen(7000);
