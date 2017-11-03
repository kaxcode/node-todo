"use strict";

var TodoCtrl = function(Todo){

	var TodoObj = {};
	TodoObj.PostTodo = function(req, res, next){
		var newTodo = new Todo(req.body);
		newTodo.save(function(err, todo){
			if(err){
				res.json({status: false, error: err.message});
				return;
			}
			res.json({status: true, todo: todo});
		});
	}

	TodoObj.GetTodo = function(req, res, next){
		Todo.find(function(err, todos){
			if(err) {
				res.json({status: false, error: "Something went wrong"});
				return
			}
			res.json({status: true, todo: todos});
		});
	}

	return TodoObj;
}

module.exports = TodoCtrl;
