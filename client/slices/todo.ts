import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { Todo, TodoData } from '../../models/Todo'
import { addTodo, fetchTodos, deleteTodo, updateTodo } from '../apis/todo'

// Todo[] is saying it is an ARRAY full of Todo object because Todo is shaped like an {}
const initialState = [] as Todo[]

export const fetchTodoList = createAsyncThunk('todos/fetchTodo', async () => {
  const todos = await fetchTodos()
  return todos
})

export const postTodo = createAsyncThunk(
  'todos/postTodo',
  async (task: string) => {
    const newTodo = { taskDetails: task, completed: false }
    await addTodo(newTodo)
    const todos = await fetchTodos()
    return todos
  }
)

export const deleteATodo = createAsyncThunk(
  'todos/deleteATodo',
  async (id: number) => {
    await deleteTodo(id)
    const todos = await fetchTodos()
    return todos
  }
)

export const updateATodo = createAsyncThunk(
  'todos/updateATodo',
  async (update: Todo) => {
    await updateTodo(update)
    const todos = await fetchTodos()
    return todos
  }
)

const todoSlice = createSlice({
  name: 'todos',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(fetchTodoList.fulfilled, (_, { payload }) => payload)
      .addCase(postTodo.fulfilled, (_, { payload }) => payload)
      .addCase(deleteATodo.fulfilled, (_, { payload }) => payload)
      .addCase(updateATodo.fulfilled, (_, { payload }) => payload),
})

export default todoSlice.reducer
