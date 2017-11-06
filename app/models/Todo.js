'use strict';
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var Schema = mongoose.Schema;

// Defining schema for our Todo API
var TodoSchema = new Schema({
    todo: {
        type: String
    },
    completed: {
        type: Boolean,
        default: false
    },
    created_by: {
        type: Date,
        default: Date.now
    }
});

//Exporting our model
module.exports = mongoose.model('Todo', TodoSchema);
