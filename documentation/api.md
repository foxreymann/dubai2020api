# *Join the conversation* API specification

**Show Social Feed**
----
Returns json feed with posts from Twitter and Instagram hashtagged with \#DubaiExpo2020 topic

* **URL**

/social-feed

* **Method:**

`GET`

*  **URL Params**

 **Optional:**  
 `hashtag=[string|false]` defaults to `false`  
`callback=[string]` defaults to `callback`  
  * values used by frontend app are like `angular.callbacks._0`, `angular.callbacks._1` ...  

* **Success Response:**

  * **Code:** 200  
  * **Content:**  
```javascript
angular.callbacks._0({
  "page": 1,
  "per-page": 20,
  "items": [
    ...
  ]
})
```
