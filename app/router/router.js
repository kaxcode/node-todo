var Todo = require('../models/Todo');
var TodoController = require('../controllers/todoController')(Todo);

module.exports = function(app){

	app.get('/api/todos', TodoController.GetTodo);

	app.post('/api/todos', TodoController.PostTodo);

}