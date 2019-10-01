'use strict';

module.exports = function(app) {
    var account = require('../controller/controller');

    app.route('/')
        .get(account.index);

    app.route('/users')
        .get(account.users);

    app.route('/users/:id')
        .get(account.findUsers);

    app.route('/users')
        .post(account.createUsers);

    app.route('/users')
        .put(account.updateUsers);
    
    app.route('/users')
        .delete(account.deleteUsers);
};