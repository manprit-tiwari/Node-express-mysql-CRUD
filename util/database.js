const mysql = require('mysql2');

const conn = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'King@7201',
    database: 'node-practice'
});

module.exports = conn.promise();