'use strict';

/**
 * Created by gong on 14-3-31.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
/**
 * @author gong
 */
var CustomerSchema = new Schema({
    _id: {
        type: String
    },
    name: {
        type: String,
        required: true,
        trim: true
    },
    tel: {
        type: String,
        match: [/^(0[0-9]{2,3}-)?([2-9][0-9]{6,7})+(-[0-9]{1,4})?$/, '电话号码格式不正确。']},
    address: {
        street: {
            type: String,
            default: '',
            trim: true},
        city: {
            type: String,
            default: '',
            trim: true},
        province: {
            type: String,
            default: '',
            trim: true},
        zip: {
            type: String,
            match: [/^[1-9][0-9]{5}$/, '邮编格式不正确。'],
            trim: true}

    },
    contact: {
        name: {
            type: String,
            required: true,
            trim: true},
        gender: {
            type: String,
            enum: ['男', '女']},
        age: Number,
         mobile: {
            type: String,
            match: [/^(1[35][0-9]{9})$/, '手机号格式不准确。']},
        email: String,
        photo:String,
        hobbies:[String]
    },
    salesman: {
        type: Schema.ObjectId,
        ref: 'User'
    },
    created: {
        type: Date,
        default: Date.now
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
