var express = require('express');
var app = express();

var socialFeed = {
  "items": [
    {
      "id": 1233,
      "social_network": "twitter",
      "hashtag": "collaboration",
      "image": "",
      "text" : "Lorem ipsum dolor dolor dolor",
      "epoch": "1421586217"
    },
    {
      "id": 1234,
      "social_network": "instagram",
      "hashtag": "diversity",
      "image": "http://photos-h.ak.instagram.com/hphotos-ak-xaf1/t51.2885-15/10903539_766280623463767_591925845_n.jpg",
      "text" : "Lorem ipsum",
      "epoch": "1421586217"
    },
    {
      "id": 1235,
      "social_network": "instagram",
      "hashtag": "culture",
      "image": "http://photos-d.ak.instagram.com/hphotos-ak-xaf1/t51.2885-15/10914250_444222172391539_115478886_n.jpg",
      "text" : "",
      "epoch": "1421586218"
    }
  ]
}

app.get('/social-feed', function(req, res){
  res.jsonp(socialFeed)
});

var port = process.env.PORT || 3000;
app.listen(port);
