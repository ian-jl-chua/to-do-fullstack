import express from 'express'
import * as db from '../db/db'
const router = express.Router()

// GET list of todos
router.get('/', async (req, res) => {
  try {
    const data = await db.getTodos()
    res.json(data)
  } catch (error) {
    res.status(500).send('Database error')
  }
})

// POST a new todo
router.post('/', async (req, res) => {
  try {
    const item = req.body
    const id = await db.addTodos(item)
    res.status(201).json(id)
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: 'Database error on addTodos' })
    }
  }
})

// DELETING a todo
router.delete('/', async (req, res) => {
  try {
    const id = req.body.id
    await db.deleteTodos(id)
    res.status(200).send('Deleted')
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: 'Database error on deleteTodos' })
    }
  }
})

// Update a todo
router.patch('/', async (req, res) => {
  try {
    const update = req.body
    const result = await db.updateTodos(update)
    res.json(result)
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: 'Database error on updateTo' })
    }
  }
})
export default router
