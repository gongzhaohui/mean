'use strict';

/**
 * Created by gong on 14-4-1.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var InventorySchema = new Schema({
    _id: String,
    name: {type: String, required: true},
    toolNo: {type: String, required: true},
    drawingNo: {type: String, required: true},
    pricing: {
        cost: {type: Number, default: 0},
        price: {type: Number, default: 0}
    },
    category: {type: Schema.ObjectId, ref: 'Category'},
    way: {type: Schema.ObjectId, ref: 'Way'},
    available: {type: Number, default: 0},
    children: [
        {
            seq: Number,
            iId: {type: Schema.ObjectId, ref: 'Inventory'},
            way: {type: Schema.ObjectId, ref: 'Way'},
            qty: Number
        }
    ],
    assembly: Boolean,
    semiFinish: Boolean,
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
InventorySchema.statics = {};
InventorySchema.methods = {};
mongoose.model('Inventory', InventorySchema);