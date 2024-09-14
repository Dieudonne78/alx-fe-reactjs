import { useState } from "react";
function Addrecipeform(){

  ["validate"]
  const[title,setTitle]=useState('');
  const[ingredients,setIngredients]=useState('');
  const[steps,setSteps]=useState('');
  const [errors, setErrors] = useState(false)
  function handleSubmit(e){
    e.preventDefault()
    if(title === '' || ingredients==='' || steps===''){
      setErrors(true)
      console.log('Provide your input')
    }
  }

  return(
      <form className="grid grid-cols-1 grid-cols-2 grid-cols-3 md"onSubmit={handleSubmit}>
        <input className="shadow-lg" onChange={(e)=>setTitle(e.target.value)} type="text" id="title" value={title}/>
        <textarea className="rounded-lg" onChange={(e)=>setIngredients(e.target.value)} type="text" id="ingredients" value={ingredients}></textarea>
        <textarea className="text-sm" onChange={(e)=>setSteps(e.target.value)} type="text" id="steps " value={steps }></textarea>
        <button className="hover:shadow-2xl" type="submit" id="submission" > post the form data.</button>
        {errors && <small>All fields are required</small>}
      </form>
  )

}

export default Addrecipeform;