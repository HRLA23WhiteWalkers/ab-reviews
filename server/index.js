var express = require('express');
var bodyParser = require('body-parser');
var selectAll = require('../database-mongo').selectAll;
console.log('items : ',selectAll)
var app = express();


app.use(express.static(__dirname + '/../react-client/dist'));


app.get('/items', function (req, res) {
  selectAll(function(err, data) {
    if(err) {
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });
});

app.listen(3001, function() {
  console.log('listening on port 3001!');
});

