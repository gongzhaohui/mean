'use strict';

// DsnRouters routes use dsnrRouters controller
var dsnRouters = require('../controllers/dsnRouters');
var authorization = require('./middlewares/authorization');

// DsnRouter authorization helpers
var hasAuthorization = function (req, res, next) {
    if (req.dsnRouter.user.id !== req.user.id) {
        return res.send(401, 'User is not authorized');
    }
    next();
};

module.exports = function (app) {

    app.get('/dsnRouters', dsnRouters.all);
    app.post('/dsnRouters', authorization.requiresLogin, dsnRouters.create);
    app.get('/dsnRouters/:dsnRouterId', dsnRouters.show);
    app.put('/dsnRouters/:dsnRouterId', authorization.requiresLogin, hasAuthorization, dsnRouters.update);
    app.del('/dsnRouters/:dsnRouterId', authorization.requiresLogin, hasAuthorization, dsnRouters.destroy);

    // Finish with setting up the dsnRouterId param
    app.param('dsnRouterId', dsnRouters.dsnRouter);

};