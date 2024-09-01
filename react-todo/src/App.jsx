import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodoList from './components/TodoList'
import AddTodoForm from './components/AddTodoForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TodoList />
      <AddTodoForm />
    </>
  )
}

export default App
