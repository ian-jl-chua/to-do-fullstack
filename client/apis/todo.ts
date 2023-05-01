import request, { SuperAgentRequest } from 'superagent'
import { TodoData, Todo } from '../../models/Todo'

const rootUrl = '/api/v1/todos'

export async function fetchTodos(): Promise<Todo[]> {
  const todoList = await request.get(rootUrl)
  return todoList.body
}

export function addTodo(todo: TodoData): SuperAgentRequest {
  return request.post(rootUrl).send(todo)
}

// we are doing type Todo['id] because we only need the id and not taskDetails and completed, which is included in the Todo shape {}
// see path to models/Todo.ts

export function deleteTodo(id: Todo['id']): SuperAgentRequest {
  return request.delete(rootUrl).send({ id: id })
}

export function updateTodo(task: Todo) {
  return request.patch(rootUrl).send(task)
}
