'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;


/**
 * DsnRouter Schema
 */
var DsnRouterSchema = new Schema({
    created: {
        type: Date,
        default: Date.now
    },
    title: {
        type: String,
        default: '',
        trim: true
    },
    content: {
        type: String,
        default: '',
        trim: true
    },
    path: {
        type: String,
        default: '',
        trim: true
    },
    controller: {
        type: String,
        default: '',
        trim: true
    },
    method: {
        type: String,
        default: '',
        trim: true
    },
    view: {
        type: String,
        default: '',
        trim: true
    },
    app: {
        type: Schema.ObjectId,
        ref: 'DsnApp'
    },
    user: {
        type: Schema.ObjectId,
        ref: 'User'
    }
});

/**
 * Validations
 */
DsnRouterSchema.path('controller').validate(function (controller) {
    return controller.length;
}, 'Controller cannot be blank');
DsnRouterSchema.path('path').validate(function (path) {
    return path.length;
}, 'Path cannot be blank');
DsnRouterSchema.path('method').validate(function (method) {
    return method.length;
}, 'Method cannot be blank');
DsnRouterSchema.path('view').validate(function (view) {
    return view.length;
}, 'View cannot be blank');
/**
 * Statics
 */
DsnRouterSchema.statics.load = function (id, cb) {
    this.findOne({
        _id: id
    }).populate('user', 'name username').exec(cb);
};

mongoose.model('DsnRouter', DsnRouterSchema);
