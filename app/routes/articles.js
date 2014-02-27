'use strict';

// Articles routes use articles controller
var articles = require('../controllers/dsnRouters');
var authorization = require('./middlewares/authorization');

// DsnRouter authorization helpers
var hasAuthorization = function (req, res, next) {
    if (req.dsnRouter.user.id !== req.user.id) {
        return res.send(401, 'User is not authorized');
    }
    next();
};

module.exports = function (app) {

    app.get('/articles', dsnRouters.all);
    app.post('/articles', authorization.requiresLogin, dsnRouters.create);
    app.get('/articles/:articleId', dsnRouters.show);
    app.put('/articles/:articleId', authorization.requiresLogin, hasAuthorization, dsnRouters.update);
    app.del('/articles/:articleId', authorization.requiresLogin, hasAuthorization, dsnRouters.destroy);

    // Finish with setting up the articleId param
    app.param('articleId', dsnRouters.dsnRouter);

};