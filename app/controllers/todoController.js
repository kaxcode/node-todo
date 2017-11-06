const mongoose = require('mongoose');
const Todo = mongoose.model('Todo');

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
        return err ? res.send(err) : res.json({message: "Todo successfully added!", todo});
    });
}
