'use strict';

/**
 * Created by gong on 14-4-1.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var TempSchema = new Schema({
    id: Number,
    method: String
});
TempSchema.statics = {};
TempSchema.methods = {};
mongoose.model('Temp', TempSchema);