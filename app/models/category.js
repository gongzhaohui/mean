'use strict';

/**
 * Created by gong on 14-4-1.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var CategorySchema = new Schema({
    _id: String,
    seq: Number
});
CategorySchema.statics = {};
CategorySchema.methods = {};
mongoose.model('Category', CategorySchema);