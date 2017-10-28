var express = require('express');
var router = express.Router();

var Todo = require('../models/Todo');
var TodoController = require('../controllers/todoController')(Todo);

// Get all Todo
router.get('/todo', TodoController.GetTodo);

module.exports = router;
