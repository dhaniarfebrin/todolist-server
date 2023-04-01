const express = require('express')
const router = express.Router()

const { getAllTodos, getOneTodo, createTodo, updateTodo, deleteTodo } = require('../controller/todo')

router.get('/', getAllTodos)
router.get('/:id', getOneTodo)
router.post('/', createTodo)
router.patch('/:id', updateTodo)
router.delete('/:id', deleteTodo)

module.exports = router