'use strict';

/**
 * Created by gong on 14-4-1.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
var BomItemSchema = new Schema({
    seq: Number,
    iId: {type: Schema.ObjectId, ref: 'Inventory', index: true},
    qty: Number
});
var InventorySchema = new Schema({
    _id: {type: String, index: true},
    name: {type: String, required: true},
    toolNo: {type: String, unique: true},
    drawingNo: {type: String, unique: true},
    pricing: {
        cost: {type: Number, default: 0},
        price: {type: Number, default: 0}
    },
    category: {type: Schema.ObjectId, ref: 'Category', index: true},
    way: {type: Schema.ObjectId, ref: 'Way'},
    available: {type: Number, default: 0},
    children: [BomItemSchema],
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