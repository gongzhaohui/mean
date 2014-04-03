'use strict';

/**
 * Created by gong on 14-4-1.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var BomSchema = new Schema({
    _id: String,
    date: Date,
    iId: {type: Schema.ObjectId, ref: 'Inventory'},
    name: {type: String, required: true},
    toolNo: {type: String, required: true},
    drawingNo: {type: String, required: true},
    children: [
        {
            seq: Number,
            iId: {type: Schema.ObjectId, ref: 'Inventory'},
            way: {type: Schema.ObjectId, ref: 'Way'},
            quantity: Number
        }
    ]

});
BomSchema.statics = {};
BomSchema.methods = {};
mongoose.model('Bom', BomSchema);