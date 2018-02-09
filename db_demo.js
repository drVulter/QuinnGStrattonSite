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
