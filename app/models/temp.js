'use strict';

/**
 * Created by gong on 14-4-1.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var TempSchema = new Schema({
    _id: String,
    seq: Number
});
TempSchema.statics = {};
TempSchema.methods = {};
mongoose.model('Temp', TempSchema);