'use strict';

/**
 * Created by gong on 14-4-1.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ProcessSchema = new Schema({
    iid: {type: Schema.ObjectId, ref: 'Inventory'},
    date: Date,
    Operations: [
        {
            rowno: Number,
            station: String,
            job: String,
            tasktime: Number,
            comment: String
        }
    ]

});
ProcessSchema.statics = {};
ProcessSchema.methods = {};
mongoose.model('Process', ProcessSchema);