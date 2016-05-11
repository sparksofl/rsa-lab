var express = require('express');
var app = express();
var NodeRSA = require('node-rsa');
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(__dirname ));
app.get('/*', function (req, res) {
  res.sendFile(__dirname + "/index.html");
});
app.post('/', function (req, res) {
  // key = req.body.key
  // text = req.body.text
  // encrypted = key.encrypt(text, 'base64');
  res.send('asd');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

