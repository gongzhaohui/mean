'use strict';

/**
 * Created by gong on 14-4-1.
 */

var mongoose = require('mongoose'),
    SO = mongoose.model('SO'),
    _ = require('lodash');
exports.create = function (req, res) {
    var so = new SO(req.body);
    so.aId = req.user;

    so.save(function (err) {
        if (err) {
            return res.send('user/signup', {
                errors: err.errors,
                so: so
            });
        } else {
            res.jsonp(so);
        }
    });
};