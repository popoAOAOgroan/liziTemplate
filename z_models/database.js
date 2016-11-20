var mysql = require('mysql');

var conn = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'nuoxiaobao',
	database: 'test',
	port: '3306'
});
conn.connect();

module.exports = conn;

