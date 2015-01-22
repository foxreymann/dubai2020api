# *Join the conversation* API specification

## Legend

**main hashtag** - `#Expo2020` hashtag

**secondary hashtag** - Subtopic hashtag like `#collaboration`, `#education` etc. When post is originally hashtagged with more than one subtopic only the first one should be returned by the API.

## Show Social Feed
Returns json feed with posts from Twitter and Instagram hashtagged with \#DubaiExpo2020 topic.

### URL

/social-feed

### Method:

`GET`

### Query String Params

**Optional:**

`hashtag=[string]` defaults to empty string  
- filter items by secondary hashtag (\#mobility, \#sustainability etc.)  

`return_posts_after_post_id=[integer|null]` defaults to `null`  
- Id of last post already received from the API by the web app. Next post after that one should be returned as first post.  
- If `null` then newest post available should be returned as first post.

`items_to_return=[integer]` defaults to `20`  
- Number of items to be returned.

`lang=[en|ar]` defaults to `en`  
- Language of posts

`callback=[string]` defaults to `callback`  
- JSONP callback function name  
- values used by frontend app are like `angular.callbacks._0`, `angular.callbacks._1` ...  

### Sample Call:

`/social-feed?hashtag=opportunity&last_item_id=1234&items_to_return=80&lang=ar&callback=angular.callbacks._0`

### Success Response:

**Code:** 200  
**Content:**  
```javascript
callback({
  "items": [
    {
      "id": 1234,
      "social_network": "twitter",
      "hashtag": "education",
      "image": "http://www.example.com/dubai.jpg",
      "text" : "Lorem ipsum",
      "epoch": "1421586217"
    },
    {
      "id": 1235,
      "social_network": "instagram",
      "hashtag": "collaboration",
      "image": "http://www.example.com/dubai-photo.jpg",
      "text" : "",
      "epoch": "1421586218"
    }
  ]
})
```

## Show Social Feed Item
Returns json data of a single posts. Post id used has been retreived from Show Social Feed API call.

### URL

/social-feed/:id

### Method:

`GET`

### URL Params

**Required:**

`id=[integer]`

### Query String Params

**Optional:**

`callback=[string]` defaults to `callback`  
- JSONP callback function name  
- values used by frontend app are like `angular.callbacks._0`, `angular.callbacks._1` ...  

### Sample Call:

`/social-feed/1234?callback=angular.callbacks._1`

### Success Response:

**Code:** 200  
**Content:**  
```javascript
callback({
  "id": 1234,
  "social_network": "twitter",
  "hashtag": "collaboration",
  "image": "http://www.example.com/dubai.jpg",
  "text" : "Lorem ipsum",
  "epoch": "1421586217"
})
```

## Social Feed Item Entity
**id** `integer` Our internal identification number.  
**social_network** `string` Social network where the item originates from. Possible values are `twitter` and `instagram`.  
**hashtag** `string` Secondary hashtag assigned to the post.  
**image** `string` URL of the image assigned to the item. Empty string if no image is available.  
**text** `string` Text assigned to the item. Empty string if no text is available.  
**epoch** `integer` [Unix time](http://en.wikipedia.org/wiki/Unix_time) of when the item was posted.
