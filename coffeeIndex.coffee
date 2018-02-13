http = require 'http'

port = process.env.port || 1337
server = http.createServer(req, res) ->
  res.writeHeader 200, 'Content-Type': 'text/plain'
  res.write 'Hello, World!'
  res.end()
  .listen port  

server.listen port

console.log "Server running at http://localhost:%d", port
