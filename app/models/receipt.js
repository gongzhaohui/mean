'use strict';

/**
 * Created by gong on 14-4-1.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ReceiptSchema = new Schema({
    id: String,
    date: Date,
    operator: {type: Schema.ObjectId, ref: 'Employee'},
    cId: {type: Schema.ObjectId, ref: 'Customer'},
    iId: {type: Schema.ObjectId, ref: 'Invoice'},
    iAmount: Number,
    rAmount: Number,
    VoucherStatus: {type: Schema.ObjectId, ref: 'VoucherStatus'}
});
ReceiptSchema.statics = {};
ReceiptSchema.methods = {};
mongoose.model('Receipt', ReceiptSchema);