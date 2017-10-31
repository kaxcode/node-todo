"use strict";

var TodoCtrl = function(Todo){

	var TodoObj = {};

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
