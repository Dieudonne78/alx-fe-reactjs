import { useState } from "react";
function TodoList(){
  ["useState", "key"]
  const [todos,setTodos] = useState([
    {
      todo:'walking',
      isComplited:false
    },
    {
      todo:'walking',
      isComplited:false
    },
    {
      todo:'walking',
      isComplited:false
    },
    {
      todo:'walking',
      isComplited:false
    },
    {
      todo:'walking',
      isComplited:false
    },
  ])
  return(
    <>
    {
      todos.map((todo)=>(
      <h2>{todo.todo}</h2>
      ))
    }
    </>
  )
}

export default TodoList;