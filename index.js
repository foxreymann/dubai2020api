var express = require('express');
var app = express();

var items = [];

for(var i=0; i < 10; i++) {
  var item = {};
  item.id = i;
  item.social_network = "twitter";
  item.hashtag = "diversity";
  item.image = "http://photos-d.ak.instagram.com/hphotos-ak-xaf1/t51.2885-15/10914250_444222172391539_115478886_n.jpg";
  item.text = "post with id " + i;
  item.epoch = "1421586217";
  items.push(item);
}

app.get('/social-feed', function(req, res){
  var first_item_id = parseInt(req.param('first_item_id', 0));
  var proceeding_items_to_return = parseInt(req.param('proceeding_items_to_return', 0));
  var response = {};
  response.items = items.slice(first_item_id, first_item_id + proceeding_items_to_return + 1);
  res.jsonp(response);
});

var port = process.env.PORT || 3000;
app.listen(port);
