'use strict'

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
            quantity: Number,
            category: {type: Schema.ObjectId, ref: 'Category'},
            way: {type: Schema.ObjectId, ref: 'ProducingWay'},
            price: Number,
            deuDate: Date
        }
    ]
});
SOSchema.pre('save', function (next) {
    if (this.isNew) {
        var counter = mongoose.Schema('counter');
        var seq = counter.getNextSequence('S');
        var seqStr = "000000000" + seq;
        seqStr = seqStr.slice(seqStr.length - 9);
        this._id = 'S' + seqStr;
    }
    ;
    next();
});
mongoose.model('SO', SOSchema);
