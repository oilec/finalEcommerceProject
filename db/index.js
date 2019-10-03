const mysql = require('mysql');

// variable to hold connection
let connection;

if (!connection) { //if no connection then create connection
    connection = mysql.createConnection({
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME
    });
    
    connection.connect((err) => { //try connecting
        if (err) throw err; //if it does not connect, throw error message
        console.log('Connected as id' + connection.threadId);
    });
}

module.exports = { 
    db: connection
}