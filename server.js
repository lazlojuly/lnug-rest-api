const http = require('http')
const port = 3002

const rootResponseFixture = [
	{ "href": "http://localhost:3001/users" },
	{ "href": "http://localhost:3001/repos" }
]

const server = http.createServer((request, response) => {
	if (request.url === '/') {
		response.writeHead(200, {'Content-Type': 'application/json'})
		response.end(JSON.stringify(rootResponseFixture))
	} else {
		response.writeHead(404)
		response.end()
	}
})

server.listen(port, () => {
	console.log("Server listening on: http://localhost:%s", port)
})
