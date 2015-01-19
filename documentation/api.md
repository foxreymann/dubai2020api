# *Join the conversation* API specification

**Show Social Feed**
----
Returns json feed with posts from Twitter and Instagram hashtagged with \#DubaiExpo2020 topic

* **URL**

    /social-feed

* **Method:**

    `GET`

* **URL Params**

 **Optional:**

    `hashtag=[string|false]` defaults to `false`  
      * filter items by secondary hashtag (\#mobility, \#sustainability etc.)

    `callback=[string]` defaults to `callback`  
      * JSONP callback function name
      * values used by frontend app are like `angular.callbacks._0`, `angular.callbacks._1` ...  

    `first-item-index` defaults to `0`

    `last-item-index` defaults to `19`

* **Success Response:**

  * **Code:** 200  
  * **Content:**  
```javascript
angular.callbacks._0({
  "firt-item-index": 0,
  "last-item-index": 19,
  "items": [
    ...
  ]
})
```
