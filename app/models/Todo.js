const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

// Defining schema for our Todo API
var todoSchema = new mongoose.Schema({
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
module.exports = mongoose.model('Todo', todoSchema);
