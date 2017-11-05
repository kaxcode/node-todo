const mongoose = require('mongoose');
const Todo = mongoose.model('Todo');

exports.addTodo = (req, res) => {
    const todo = new Todo(req.body);
    newTodo.save(function(err, todo){
        if(err){
            res.json({status: false, error: err.message});
            return;
        }
        res.json({message: "API successfully added!", todo});
    });
}