'use strict';

/**
 * Created by gong on 14-4-1.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var InvoiceSchema = new Schema({
    _id: String,
    date: Date,
    operator: {type: Schema.ObjectId, ref: 'Employee'},
    cId: {type: Schema.ObjectId, ref: 'Employee'},
    items: [
        {
            source: {_id: String, ref: String, row: Number},
            soRow: Number,
            iId: {type: Schema.ObjectId, ref: 'Inventory'},
            qty: Number,
            price: Number
        }
    ],
    amount: Number,
    VoucherStatus: {type: Schema.ObjectId, ref: 'VoucherStatus'}
});
InvoiceSchema.statics = {};
InvoiceSchema.methods = {};
mongoose.model('Invoice', InvoiceSchema);