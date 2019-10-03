'use strict'

var response = require('../config/response');
var database = require('../config/database');

exports.users = function(req, res) {
    database.query('SELECT * FROM user_account', function (error, rows, fields){
        if(error) {
            console.log(error);
        } else {
            response.success(rows, res);
        }
    });
};

exports.index = function(err, res) {
    response.success("Success!", res);
};

exports.findUsers = function(req, res) {
    
    var id = req.params.id;

    database.query('SELECT * FROM user_account where id = ?',
    [ id ], 
    function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.success(rows, res)
        }
    });
};

exports.createUsers = function(req, res) {
    
    var firstname = req.body.firstname;
    var lastname = req.body.lastname;
    var phone = req.body.phone;
    var dob = req.body.dob;
    var gender = req.body.gender;
    var email = req.body.email;

    database.query('INSERT INTO user_account (firstname, lastname, phone, dob, gender, email) values (?,?,?,?,?,?)',
    [ firstname, lastname, phone, dob, gender, email ], 
    function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.success("Berhasil menambahkan user!", res)
        }
    });
};

exports.updateUsers = function(req, res) {
    
    var id = req.body.id;
    var firstname = req.body.firstname;
    var lastname = req.body.lastname;
    var phone = req.body.phone;
    var dob = req.body.dob;
    var gender = req.body.gender;
    var email = req.body.email;

    database.query('UPDATE user_account SET firstname = ?, lastname = ?, phone = ?, dob = ?, gender = ?, email = ? WHERE id = ?',
    [ firstname, lastname, phone, dob, gender, email ,id ], 
    function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.success("Berhasil merubah user!", res)
        }
    });
};

exports.deleteUsers = function(req, res) {
    
    var id = req.body.id;

    database.query('DELETE FROM user_account WHERE id = ?',
    [ id ], 
    function (err, rows, fields){
        if(err){
            response.failed("Error menghapus user!", res)
            
        } else{
            response.success("Berhasil menghapus user!", res)
        }
    });
};