'use strict';

/**
 * Created by gong on 14-3-31.
 * 更新履历 函数
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
var SOItemSchema = new Schema({
    row: {type: Number, index: true, unique: true},
    iId: {type: String, ref: 'Inventory', index: true},
    qty: {
        ordered: Number,
        delivered: {type: Number, default: 0}
    },
    category: {type: String, ref: 'Category', index: true},
    way: {type: String, ref: 'Way', index: true},
    price: Number,
    deuDate: Date
}, {autoId: false});
var SOSchema = new Schema({
    _id: String,
    aId: {type: String, ref: 'Employee'},
    eId: {type: String, ref: 'Employee', index: true},
    cId: {type: String, ref: 'Customer', index: true},
    deuDate: {type: Date, index: true},
    voucherStatus: {type: String, ref: 'VoucherStatus', index: true},
    items: [SOItemSchema],
    created: {
        date: {type: Date, default: Date.now, index: true},
        eId: {type: String, ref: 'Employee', index: true}
    },
    updated: [
        {
            date: {type: Date, default: Date.now},
            eId: {type: String, ref: 'Employee'}
        }
    ]
});
SOSchema.index({_id: 1, 'items.row': 1});
SOSchema.statics = {};
SOSchema.methods = {};
mongoose.model('SO', SOSchema);
