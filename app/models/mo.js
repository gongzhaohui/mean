'use strict';

/**
 * Created by gong on 14-4-1.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var MOSchema = new Schema({
    _id: String,
    moDate: Date,
    aId: String,
    source: {_id: String, ref: String, row: Number},
    VoucherStatus: Number,
    items: [
        {
            rowNo: Number,
            iId: {type: Schema.ObjectId, ref: 'Inventory'},
            quantity: Number,
            dueDate: Date,
            way: {type: Schema.ObjectId, ref: 'Way'},
            status: Number,
            operations: [
                {
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
                        method: {type: Schema.ObjectId, ref: 'Method'}
                    }
                }
            ],
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
                method: {type: Schema.ObjectId, ref: 'Method'}
            }
        }
    ]

});
MOSchema.statics = {};
MOSchema.methods = {};
mongoose.model('MO', MOSchema);