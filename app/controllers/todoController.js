'use strict';
const mongoose = require('mongoose');
const Todo = mongoose.model('Todo');

exports.getTodos = (req, res) => {
    Todo.find((err, todos) => {
        err ? res.send(err) : res.json(todos);
    });
}

exports.addTodo = (req, res) => {
    const todo = new Todo(req.body);
    todo.save(function(err, todo){
        err ? res.send(err) : res.json({message: "Todo successfully added!", todo});
    });
}

exports.getTodo = (req, res) => {
    Todo.findById(req.params.id, (err, book) => {
        err ? res.send(err) : res.json(book);
    });     
}

exports.deleteTodo = (req, res) => {
    Todo.remove({_id : req.params.id}, (err, result) => {
        err ? res.send(err) : res.json({ message: "Todo successfully deleted!", result });
    });
}

exports.updateTodo= (req, res) => {
    Todo.findById({_id: req.params.id}, (err, todo) => {
        err ? res.send(err) :
        Object.assign(todo, req.body).save((err, todo) => {
            err ? res.send(err) : res.json({ message: 'Todo updated!', todo });
        }); 
    });
}
