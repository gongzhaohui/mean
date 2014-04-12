'use strict';

/**
 * Created by gong on 14-4-1.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var InboundSchema = new Schema({
    _id: String,
    date: Date,
    source: {_id: String, row: Number, ref: String},
    wId: {type: Schema.ObjectId, ref: 'Warehouse'},
    operator: {type: Schema.ObjectId, ref: 'Employee'},
    iId: {type: Schema.ObjectId, ref: 'Inventory'},
    qty: Number,
    created: {
        date: {type: Date, default: Date.now},
        eId: {type: Schema.ObjectId, ref: 'Employee'}
    },
    updated: [
        {
            date: {type: Date, default: Date.now},
            eId: {type: Schema.ObjectId, ref: 'Employee'}
        }
    ]
});
InboundSchema.index({source: 1});
InboundSchema.statics = {};
InboundSchema.methods = {};
mongoose.model('Inbound', InboundSchema);