'use strict';

/**
 * Created by gong on 14-4-1.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var OutboundSchema = new Schema({
    _id: String,
    date: Date,
    source: {_id: String, ref: String, row: Number},
    wId: {type: Schema.ObjectId, ref: 'Warehouse'},
    operator: {type: Schema.ObjectId, ref: 'Employee'},
    iId: {type: Schema.ObjectId, ref: 'Inventory'},
    qty: Number
});
OutboundSchema.statics = {};
OutboundSchema.methods = {};
mongoose.model('Outbound', OutboundSchema);