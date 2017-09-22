var axios = require('axios')
var fs = require('fs')

// let user_id = 'me'
// let access_token = 'your mum'
let user_id = '1091594305'
let access_token = '1091594305.a2ab03e.ce72e79eb60949a9b61b1b48f5ea64a3'
const endpoint = 'https://api.instagram.com/v1/users/' + user_id + '/media/recent/?access_token=' + access_token
var requestLimit = 500

setInterval(() => {
	if (requestLimit > 0) {
		axios.get(endpoint)
			.then(function(response) {
				console.log(`request ${i}`)
				var filedata = JSON.stringify(response.data.data)
				fs.writeFile(`./data/cache.json`, `filedata`, function(err) {
					if (err) return console.log(err)
				})
				console.log(`file ${i} written`)
				requestLimit--
			})
			.catch(function(error) {
				console.log(error)
			})
	} else {
		requestLimit = 500
	}
}, 60000)
