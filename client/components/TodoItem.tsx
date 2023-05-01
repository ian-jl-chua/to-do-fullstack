import { useState } from 'react'
import { Todo } from '../../models/Todo'

import { useAppDispatch } from '../hooks'
import { deleteATodo, fetchTodoList, updateATodo } from '../slices/todo'

function TodoItem(props: Todo) {
  // console.log(props)
  const dispatch = useAppDispatch()

  const [state, setState] = useState(true)

  const [input, setInput] = useState(props.taskDetails)

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const editedTodo = {
      id: props.id,
      taskDetails: input,
      completed: props.completed,
    }
    console.log(editedTodo)

    dispatch(updateATodo(editedTodo))
    setInput(() => '')
    setState((state) => !state)
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setInput(() => event.target.value)
  }
  function handleDouble() {
    setState((state) => !state)
  }

  function handleClick() {
    dispatch(deleteATodo(props.id))
  }


  return (
    <li>
      <div className="view">
        <form onSubmit={handleSubmit}>
          <input className="toggle" type="checkbox" />
          {state ? (
            <label onDoubleClick={handleDouble}>{props.taskDetails}</label>
          ) : (
            <input
              className="new-todo"
              onDoubleClick={handleDouble}
              onChange={handleChange}
              type="text"
              value={input}
            />
          )}
        </form>
        <button onClick={handleClick} className="destroy"></button>
      </div>
    </li>
  )
}

export default TodoItem
