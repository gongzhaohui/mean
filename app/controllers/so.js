'use strict';

/**
 * Created by gong on 14-4-1.
 */

var mongoose = require('mongoose'),
    SO = mongoose.model('SO')//,
//   _ = require('lodash');
    ;
var getNextSequence = function () {
    var counter = mongoose.Schema('Counter');
    var seq = counter.getNextSequence('S', 1);
    //var seq = 1;
    var seqStr = '000000000' + seq;
    seqStr = seqStr.slice(seqStr.length - 9);
    return 'S' + seqStr;
};

exports.create = function (req, res) {
    debugger;
    var so = new SO({
        _id: getNextSequence(),
        soDate: Date(),
        deuDate: Date(),
        items: [
            {
                rowNo: 1,
                quantity: 4
            }
        ]
    });
    //req.body);
//    so.aId = req.user;

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