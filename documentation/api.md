# *Join the conversation* API specification

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

`callback=[string]` defaults to `callback`  
- JSONP callback function name
- values used by frontend app are like `angular.callbacks._0`, `angular.callbacks._1` ...  


`first-item-index` defaults to `0`  
`last-item-index` defaults to `19`
- used for pagination

### Sample Call:

`/social-feed?hashtag=opportunity&callback=angular.callbacks._0&first-item-index=20&last-item-index=39`

### Success Response:

**Code:** 200  
**Content:**  
```javascript
callback({
  "firt-item-index": 0,
  "last-item-index": 19,
  "items": [
    ...
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
  ...
})
```
