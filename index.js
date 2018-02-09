var http = require('http');
var dt = require('./datemodule.js');

var server = http.createServer(function(request, response) {

    response.writeHead(200, {"Content-Type": "text/plain"});
    response.writeln("Welcome to Quinn Stratton's Dynamic Website!");
    response.write("The date and time are currently: " + dt.myDateTime());
    response.end();

});

var port = process.env.PORT || 1337;
server.listen(port);

console.log("Server running at http://localhost:%d", port);
