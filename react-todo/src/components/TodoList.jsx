function todoList(){
  const todos =[
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
  ]
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

export default todoList;