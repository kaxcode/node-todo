'use strict';
const mongoose = require('mongoose');
const Todo = require('../models/Todo');

exports.getTodo = (req, res) => {
    let query = Todo.find({});
    query.exec((err, todos) => {
        if(err) res.send(err);
        res.json(todos);
    });
}


exports.addTodo = (req, res) => {
    const todo = new Todo(req.body);
    todo.save(function(err, todo){
        if(err){
                res.send(err);
        }
        res.json({message: "API successfully added!", todo});
    });
}