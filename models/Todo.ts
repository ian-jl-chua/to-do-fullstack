// this type will be posted to the backend from the frontend
export interface TodoData {
  taskDetails: string
  completed: boolean
}

// this type will be returned from backend
export interface Todo extends TodoData {
  id: number
}
