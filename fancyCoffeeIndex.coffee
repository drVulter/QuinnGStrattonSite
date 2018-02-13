http = require 'http'
useful = require './modules/useful.js'
pages = require './pages/pages.js'
port = process.env.port || 1337

server = http.createServer (req, res) ->
  res.writeHeader 200, 'Content-Type': 'text/plain'
  if req.url == "/MyInformation.json"
    res.write "JSON Page!\n"
    res.end()
  else if req.url == "/Date"
    res.write "The date and time are now " + useful.myDateTime() + "\n"
    res.end()
  else
   #pages.homeScreen(req, res)
   res.write "Welcome to the home page!\n"
   res.write "This is Quinn's dynamic website!\n"
   res.end()
server.listen port
  
console.log "Server running at http://localhost:%d", port
