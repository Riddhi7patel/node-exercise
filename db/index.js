
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'myuser',
  password: 'mypassword',
  database: 'DB_SCHEMA'
});

module.exports = connection;
