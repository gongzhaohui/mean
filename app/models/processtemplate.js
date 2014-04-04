'use strict';

/**
 * Created by gong on 14-4-1.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ProcessTemplateSchema = new Schema({
    id: String,
    date: Date,
    name: String,
    Operations: [
        {
            rowNo: Number,
            station: String,
            job: String,
            tasktime: Number,
            comment: String
        }
    ]
});
ProcessTemplateSchema.statics = {};
ProcessTemplateSchema.methods = {};
mongoose.model('ProcessTemplate', ProcessTemplateSchema);