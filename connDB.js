
var mysql = require('mysql');//db연결
var conn = mysql.createConnection({
  host: '',
  port: '3306',
  user: '',
  password: '',
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
