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
    num: Number,
    voucherStatus: {type: Schema.ObjectId, ref: 'VoucherStatus'},
    items: [
        {
            rowNo: Number,
            iId: {type: Schema.ObjectId, ref: 'Inventory'},
            qty: Number,
            category: {type: Schema.ObjectId, ref: 'Category'},
            way: {type: Schema.ObjectId, ref: 'ProducingWay'},
            price: Number,
            deuDate: Date
        }
    ]
});

mongoose.model('SO', SOSchema);
