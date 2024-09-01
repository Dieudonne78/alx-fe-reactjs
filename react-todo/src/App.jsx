import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import todoList from './components/TodoList'
import addTodoForm from './components/AddTodoForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <todoList />
      <addTodoForm />
    </>
  )
}

export default App
