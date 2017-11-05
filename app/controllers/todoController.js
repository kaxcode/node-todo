const mongoose = require('mongoose');
const Todo = require('../models/Todo')

exports.addTodo = (req, res) => {
    const todo = new Todo(req.body);
    newTodo.save(function(err, todo){
        if(err){
                res.send(err);
        }
        res.json({message: "API successfully added!", todo});
    });
}