# Instagram Caching doodad

- `git clone`
- `npm i`
- Make a brew
- Define your user and access token
- `npm start`

## INTERNAL LOGIC
1. Define the correct endpoint for Instagram
1. Define the number of hourly requests allowed
1. Set an interval of once every minute
1. As long as the maximum number of requests has not been exceeded, request the payload from the endpoint
1. If the payload is returned, stringify the response and write it to the cache file
1. Decrement the request limit to indicate we have made one request


## EXTERNAL LOGIC
1. The site always requests the cache file
