var http = require('http');
var dt = require('./datemodule.js');


var server = http.createServer(function(request, response) {
    if (request.url === "/index") {
        response.writeHead(200, {"Content-Type": "text/plain"});
        response.write("other page\n");
        response.end();
    } else {
        response.writeHead(200, {"Content-Type": "text/plain"});
        response.write("Welcome to Quinn Stratton's Dynamic Website!\n");
        response.write("The date and time are currently: " + dt.myDateTime());
        response.end();
    }

});

var port = process.env.PORT || 1337;
server.listen(port);

console.log("Server running at http://localhost:%d", port);
