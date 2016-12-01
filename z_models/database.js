var mysql = require('mysql');

var conn = mysql.createConnection({
	host: 'qdm164036438.my3w.com',
	user: 'qdm164036438',
	password: 'wsBb0313',
	database: 'qdm164036438_db',
	port: '3306',
	insecureAuth: true
});
conn.connect();

module.exports = conn;

