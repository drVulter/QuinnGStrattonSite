var http = require('http');
var dt = require('./datemodule.js');

var mysql = require('mysql');

var con = mysql.createConnection({
    host: "qgsserver.database.windows.net",
    user: "QuinnStratton",
    password: "drVulter1123"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});

var server = http.createServer(function(request, response) {

    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Welcome to Quinn Stratton's Dynamic Website!\n");
    response.write("The date and time are currently: " + dt.myDateTime());
    response.end();

});

var port = process.env.PORT || 1337;
server.listen(port);

console.log("Server running at http://localhost:%d", port);
