import { useState } from 'react'

import { useAppDispatch } from '../hooks'
import { fetchTodoList, postTodo } from '../slices/todo'

// eslint-disable-next-line no-unused-vars
function AddTodo() {
  const dispatch = useAppDispatch()

  const [input, setInput] = useState('')

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    dispatch(postTodo(input))
    setInput(() => '')
    dispatch(fetchTodoList())
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setInput(() => event.target.value)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="addTodo" style={{ display: 'none' }}>
          Todos
        </label>
        <input
          value={input}
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus={true}
          id="addTodo"
          onChange={handleChange}
        />
      </form>
    </>
  )
}

export default AddTodo
