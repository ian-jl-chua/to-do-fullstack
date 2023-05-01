import AddTodo from './AddTodo'
import ListTodos from './ListTodos'

function App() {
  return (
    <>
      <header className="header">
        <h1>Todos!</h1>
        <AddTodo />
      </header>
      <section className="main"></section>
      <ListTodos />
      <footer className="footer"></footer>
    </>
  )
}

export default App
