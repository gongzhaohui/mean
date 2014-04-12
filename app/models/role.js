'use strict';

/**
 * Created by gong on 14-3-31.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
/**
 * Role Schema
 */
var AuthSchema = new Schema({
    route: {type: String, ref: 'Route', index: true},
    c: Boolean,
    u: Boolean,
    r: Boolean,
    d: Boolean
});
var RoleSchema = new Schema({
    name: String,
    auth: [AuthSchema]
});

mongoose.model('Role', RoleSchema);