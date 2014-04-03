'use strict';

/**
 * Created by gong on 14-4-1.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var InventorySchema = new Schema({
    _id: String,
    date: Date,
    name: {type: String, required: true},
    toolNo: {type: String, required: true},
    drawingNo: {type: String, required: true},
    pricing: {
        buying: {type: Number, default: 0},
        selling: {type: Number, default: 0}
    },
    category: {type: Schema.ObjectId, ref: 'Category'},
    way: {type: Schema.ObjectId, ref: 'Way'},
    quantity: {type: Number, default: 0},
    assembly: Boolean,
    semiFinish: Boolean
});
InventorySchema.statics = {};
InventorySchema.methods = {};
mongoose.model('Inventory', InventorySchema);