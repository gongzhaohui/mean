'use strict';

// DsnRouters routes use dsnrRouters controller
var orders = require('../controllers/orders');
var authorization = require('./middlewares/authorization');

// Project authorization helpers
var hasAuthorization = function (req, res, next) {
    if (req.order.user.id !== req.user.id) {
        return res.send(401, 'User is not authorized');
    }
    next();
};

module.exports = function (app) {
    //todo paging,filter by user
    app.get('/orders', orders.all);
    app.post('/orders', authorization.requiresLogin, orders.create);
    app.get('/orders/:orderId', orders.show);
    app.put('/orders/:orderId', authorization.requiresLogin, hasAuthorization, orders.update);
    app.put('/orders/:orderId/items/:itemId', authorization.requiresLogin, hasAuthorization, orders.updateItem);
    app.del('/orders/:orderId', authorization.requiresLogin, hasAuthorization, orders.delete);
    app.del('/orders/:orderId/items/:itemId', authorization.requiresLogin, hasAuthorization, orders.deleteItem);

    // Finish with setting up the orderId param
    app.param('orderId', orders.order);

};