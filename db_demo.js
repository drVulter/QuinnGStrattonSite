const mysql = require('mysql');

var config =
    {
        host: 'qgsserver.database.windows.net',
        user: 'QuinnStratton@qgsserver',
        password: 'drVulter1123',
        database: 'Comix',
        port: 3306,
        ssl: true
    };

const conn = new mysql.createConnection(config);

conn.connect(
    function (err) { 
        if (err) { 
            console.log("!!! Cannot connect !!! Error:");
            throw err;
        }
        else
        {
            console.log("Connection established.");
            //queryDatabase();
        }   
    });
