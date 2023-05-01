import { Todo, TodoData } from '../../models/Todo'
import connection from './connection'

export function getTodos(db = connection) {
  return db('todos').select('id', 'task_details as taskDetails', 'completed')
}

export function addTodos(todo: TodoData, db = connection) {
  return db('todos').insert({
    task_details: todo.taskDetails,
    completed: todo.completed,
  })
}

export function deleteTodos(id: number, db = connection) {
  return db('todos').where('id', id).del()
}

export function updateTodos(todo: Todo, db = connection) {
  return db('todos')
    .where('id', todo.id)
    .update({ completed: todo.completed, task_details: todo.taskDetails })
}

export function getCompleted(db = connection) {
  return db('completed')
    .join('todos', 'todo_id', 'todos.id')
    .select('completed.id as id', 'todos.task_details as taskDetails')
}
