var express = require('express');
var app = express();

var socialFeed = {
  "items": []
}

for(var i=0; i < 100; i++) {
  var item = {};
  item.id = i;
  item.social_network = "twitter";
  item.hashtag = "diversity";
  item.image = "http://photos-d.ak.instagram.com/hphotos-ak-xaf1/t51.2885-15/10914250_444222172391539_115478886_n.jpg";
  item.text = "post with id " + i;
  item.epoch = "1421586217";
  socialFeed.items.push(item);
}

app.get('/social-feed', function(req, res){
  res.jsonp(socialFeed)
});

var port = process.env.PORT || 3000;
app.listen(port);
