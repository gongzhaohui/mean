'use strict';

/**
 * Created by gong on 14-4-1.
 */
var so = require('../controllers/so');

module.exports = function (app) {

    app.get('/so', so.create);
    app.get('/so/test', so.test);
    app.get('/so/testc', so.testCounter);
};