'use strict';

/**
 * Created by gong on 14-4-1.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var OutboundSchema = new Schema({
    _id: String,
    source: {
        _id: {type: String},
        row: {type: Number},
        ref: {type: String}
    },
    wId: {type: String, ref: 'Warehouse', index: true},
    iId: {type: String, ref: 'Inventory', index: true},
    qty: Number,
    created: {
        date: {type: Date, default: Date.now},
        eId: {type: String, ref: 'Employee'}
    },
    updated: [
        {
            date: {type: Date, default: Date.now},
            eId: {type: String, ref: 'Employee'}
        }
    ]
});
OutboundSchema.index({'source._id': 1, 'source.row': true});
OutboundSchema.statics = {};
OutboundSchema.methods = {};
mongoose.model('Outbound', OutboundSchema);