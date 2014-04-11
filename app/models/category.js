'use strict';

/**
 * Created by gong on 14-4-1.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var CategorySchema = new Schema({
    _id: String,
    path: String,
    description: String,
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
CategorySchema.statics = {};
CategorySchema.methods = {};
mongoose.model('Category', CategorySchema);