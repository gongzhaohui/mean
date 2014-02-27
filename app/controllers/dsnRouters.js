'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    DsnRouter = mongoose.model('DsnRouter'),
    _ = require('lodash');


/**
 * Find dsnRouter by id
 */
exports.dsnRouter = function (req, res, next, id) {
    DsnRouter.load(id, function (err, dsnRouter) {
        if (err) return next(err);
        if (!dsnRouter) return next(new Error('Failed to load dsnRouter ' + id));
        req.dsnRouter = dsnRouter;
        next();
    });
};

/**
 * Create an dsnRouter
 */
exports.create = function (req, res) {
    var dsnRouter = new DsnRouter(req.body);
    dsnRouter.user = req.user;

    dsnRouter.save(function (err) {
        if (err) {
            return res.send('users/signup', {
                errors: err.errors,
                dsnRouter: dsnRouter
            });
        } else {
            res.jsonp(dsnRouter);
        }
    });
};

/**
 * Update an dsnRouter
 */
exports.update = function (req, res) {
    var dsnRouter = req.dsnRouter;

    dsnRouter = _.extend(dsnRouter, req.body);

    dsnRouter.save(function (err) {
        if (err) {
            return res.send('users/signup', {
                errors: err.errors,
                dsnRouter: dsnRouter
            });
        } else {
            res.jsonp(dsnRouter);
        }
    });
};

/**
 * Delete an dsnRouter
 */
exports.destroy = function (req, res) {
    var dsnRouter = req.dsnRouter;

    dsnRouter.remove(function (err) {
        if (err) {
            return res.send('users/signup', {
                errors: err.errors,
                dsnRouter: dsnRouter
            });
        } else {
            res.jsonp(dsnRouter);
        }
    });
};

/**
 * Show a dsnRouter
 */
exports.show = function (req, res) {
    res.jsonp(req.dsnRouter);
};

/**
 * List of DsnRouters
 */
exports.all = function (req, res) {
    DsnRouter.find().sort('-created').populate('user', 'name username').exec(function (err, dsnrouters) {
        if (err) {
            res.render('error', {
                status: 500
            });
        } else {
            res.jsonp(dsnrouters);
        }
    });
};
