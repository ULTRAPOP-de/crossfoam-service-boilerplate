export default
{
  "api_key": "kePD9gflNGY9JgDgvObYkZqI4",
  "api_secret": "gNbCOEvQpfOX8s3toKJUZLGzyDwttsl0yuki43NeCNZiokT5Y5",
  "auth": true,
  "service_name": "Twitter",
  "service_key": "twitter",
  "queue_functions":[
    {"name": "getUser", "paramCount": [1, 1], "skip": false, "passDown": true, "timeout": 60000},
    {"name": "getUsers", "paramCount": [1, 1], "skip": false, "passDown": true, "timeout": 1000},
    {"name": "getFriendsIds", "paramCount": [5,5], "skip": true, "passDown": true, "timeout": 60000},
    {"name": "getFriends", "paramCount": [5,5], "skip": true, "passDown": true, "timeout": 60000},
    {"name": "estimateCompletion", "paramCount": [2,2], "skip": true, "passDown": true, "timeout": 60000}
  ],
  "regex":/http[s]*:\/\/[wwww.]*twitter\.com\/((?!(settings|hashtag|hashtags|explore|notifications|messages|home|compose|search|tos))[^\/]{3,})/
}