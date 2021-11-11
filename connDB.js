
var mysql = require('mysql');//db연결
var conn = mysql.createConnection({
  host: '34.64.183.247',
  port: '3306',
  user: 'root',
  password: 'gjdbsal0509',
  database: 'MenuHelperDB'
});
conn.connect(function (err) {
  if (!err) {
    console.log("db연결함.");
  } else {
    console.log("err: "+ err);
    console.log("db연결 오류발생");
  }
});
module.exports = conn;