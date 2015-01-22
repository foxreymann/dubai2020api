var express = require('express');
var app = express();

app.get('/', function(req, res){
  res.send('hello world');
});

app.get('/social-feed', function(req, res){
  res.jsonp({ user: 'tobi' })
});

app.listen(3000);
