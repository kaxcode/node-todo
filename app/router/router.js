const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todoController');

router.get('/api/todos', todoController.getTodo);

router.post('/api/todos', todoController.addTodo);

module.exports = router;