'use strict';

// User routes use employee controller
var employee = require('../controllers/user');

module.exports = function (app, passport) {

    app.get('/signin', user.signin);
    app.get('/signup', user.signup);
    app.get('/signout', user.signout);
    app.get('/employee/me', user.me);

    // Setting up the employee api
    app.post('/employee', user.create);

    // Setting up the userId param
    app.param('userId', user.user);

    // Setting the local strategy route
    app.post('/employee/session', passport.authenticate('local', {
        failureRedirect: '/signin',
        failureFlash: true
    }), user.session);
};
