import express from 'express'
import { join } from 'node:path'
import todos from './routes/todos'
// import completed from './routes/completed'

const server = express()

server.use(express.json())
server.use(express.static(join(__dirname, 'public')))

server.use('/api/v1/todos', todos)
// server.use('/api/v1/completed', completed)
server.get('*', (req, res) => {
  res.sendFile(join(__dirname, 'public/index.html'))
})

export default server
