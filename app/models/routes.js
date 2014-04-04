'use strict';

/**
 * Created by gong on 14-4-1.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var RoutesSchema = new Schema({
    _id: String,
    func: String
});
RoutesSchema.statics = {};
RoutesSchema.methods = {};
mongoose.model('Routes', RoutesSchema);