import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks'
import { fetchTodoList } from '../slices/todo'
import Todo from './TodoItem'

function ListTodos() {
  const todos = useAppSelector((state) => state.todo)

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchTodoList())
  }, [])

  return (
    <>
      <ul className="todo-list">
        {todos.map((todo) => (
          <Todo key={todo.id} {...todo} />
          // here we are spreading the todo object to list them all out
        ))}
      </ul>
    </>
  )
}

export default ListTodos
