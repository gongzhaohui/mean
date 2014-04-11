'use strict';

/**
 * Created by gong on 14-3-31.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var SOSchema = new Schema({
    _id: String,
    aId: {type: Schema.ObjectId, ref: 'Employee'},
    eId: {type: Schema.ObjectId, ref: 'Employee', index: true},
    cId: {type: Schema.ObjectId, ref: 'Customer', index: true},
    soDate: {type: Date, index: true},
    deuDate: {type: Date, index: true},
    voucherStatus: {type: Schema.ObjectId, ref: 'VoucherStatus', index: true},
    items: [
        {
            rowNo: {type: Number, index: true},
            iId: {type: Schema.ObjectId, ref: 'Inventory', index: true},
            qty: {
                ordered: Number,
                delivered: {type: Number, default: 0}
            },
            category: {type: Schema.ObjectId, ref: 'Category', index: true},
            way: {type: Schema.ObjectId, ref: 'Way', index: true},
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
