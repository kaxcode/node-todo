const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todoController');

router.get('/api/todos', todoController.getTodos);

router.post('/api/todos', todoController.addTodo);

router.get('/api/todo/:id', todoController.getTodo);

router.delete('/api/todo/:id', todoController.deleteTodo);

router.put('/api/todo/:id', todoController.updateTodo);

module.exports = router;