// Generated by CoffeeScript 1.12.7
(function() {
  var http, port, server;

  http = require('http');

  port = process.env.port || 1337;

  server = http.createServer(function(req, res) {
    if (req.url === "/MyInformation.json") {
      res.writeHeader(200, {
        'Content-Type': 'text/plain'
      });
      res.write("JSON Page!");
      return res.end;
    } else {
      res.writeHeader(200, {
        'Content-Type': 'text/plain'
      });
      res.write("Home page!");
      return res.end;
    }
  });

  server.listen(port);

  console.log("Server running at http://localhost:%d", port);

}).call(this);
