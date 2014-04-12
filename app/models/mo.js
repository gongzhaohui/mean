'use strict';

/**
 * Created by gong on 14-4-1.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var OperationSchema = new Schema({
    rowNo: Number,
    station: String,
    job: String,
    tasktime: Number,
    comment: String,
    startDate: Date,
    dueDate: Date,
    receive: {
        date: Date,
        qty: Number,
        returnQty: Number,
        returnTo: Number,
        operator: String
    },
    finish: {
        date: Date,
        operator: String,
        workhour: Number,
        qty: Number
    },
    fault: {
        date: Date,
        operator: String,
        qty: Number,
        reason: String,
        method: {type: Schema.ObjectId, ref: 'RepairMethod'}
    }
});
var MOItemSchema = new Schema({
    rowNo: {type: Number, index: true},
    iId: {type: Schema.ObjectId, ref: 'Inventory', index: true},
    qty: Number,
    dueDate: Date,
    way: {type: Schema.ObjectId, ref: 'Way'},
    status: Number,
    operations: [OperationSchema],
    check: {
        date: Date,
        operator: String,
        qty: Number
    },
    fault: {
        date: Date,
        operator: String,
        qty: Number,
        reason: String,
        method: {type: Schema.ObjectId, ref: 'RepairMethod'}
    }
});
var MOSchema = new Schema({
    _id: String,
    eId: {type: Schema.ObjectId, ref: 'Employee'},
    moDate: {type: Date, index: true},
    deuDate: {type: Date, index: true},
    source: {_id: String, row: Number, ref: String},
    voucherStatus: {type: Schema.ObjectId, ref: 'VoucherStatus', index: true},
    items: [MOItemSchema],
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
MOSchema.index({source: 1});
MOSchema.statics = {};
MOSchema.methods = {};
mongoose.model('MO', MOSchema);