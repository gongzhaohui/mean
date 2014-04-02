'use strict';

/**
 * Created by gong on 14-4-1.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var CounterSchema = new Schema({
    _id: String,
    seq: Number
});
CounterSchema.statics.getNextSequence = function (code, inc) {
    var i = inc ? inc : 1;
    var ret = this.collection.findAndModify(
        {
            query: { _id: code },
            update: { $inc: { seq: i } },
            new: true,
            upsert: true
        }
    );
    return ret.seq;
};
mongoose.model('Counter', CounterSchema);