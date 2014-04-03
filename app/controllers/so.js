'use strict';

/**
 * Created by gong on 14-4-1.
 */

var mongoose = require('mongoose'),
    SO = mongoose.model('SO')//,
//   _ = require('lodash');
    ;
var newSO = function (req, res) {
    var counter = mongoose.model('Counter');
    counter.getNextSequence('S', 1, function (err, result) {
        if (!err) {
            var seqStr = '000000000' + result.seq;
            seqStr = seqStr.slice(seqStr.length - 9);
            var so = new SO({
                _id: 'S' + seqStr,
                soDate: Date(),
                deuDate: Date(),
                items: [
                    {
                        rowNo: 1,
                        quantity: 5
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
        }
        else res.jsonp(err);
    });
};

exports.create = function (req, res) {
    newSO(req, res);

};