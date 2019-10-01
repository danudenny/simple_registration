const mysql = require('mysql');

var koneksi = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "db_registration_mitrais"
})

koneksi.connect(function (err) {
    if(!err) {
        console.log("Database is connected ... nn");
    } else {
        console.log("Error connecting database ... nn");
    }
});

module.exports = koneksi;