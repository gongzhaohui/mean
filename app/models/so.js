'use strict';

/**
 * Created by gong on 14-3-31.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var SOSchema = new Schema({
    _id: String,
    aId: {type: Schema.ObjectId, ref: 'Employee'},
    eId: {type: Schema.ObjectId, ref: 'Employee'},
    cId: {type: Schema.ObjectId, ref: 'Customer'},
    soDate: Date,
    deuDate: Date,
    voucherStatus: {type: Schema.ObjectId, ref: 'VoucherStatus'},
    items: [
        {
            rowNo: Number,
            iId: {type: Schema.ObjectId, ref: 'Inventory'},
            qty: {
                ordered: Number,
                delivered: {type: Number, default: 0}
            },
            category: {type: Schema.ObjectId, ref: 'Category'},
            way: {type: Schema.ObjectId, ref: 'Way'},
            price: Number,
            deuDate: Date
        }
    ],
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
SOSchema.statics = {};
SOSchema.methods = {};
mongoose.model('SO', SOSchema);
