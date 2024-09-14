import { useState } from "react";
function Addrecipeform(){

  
  const[title,setTitle]=useState('');
  const[ingredients,setIngredients]=useState('');
  const[steps,setSteps]=useState('');
  const [error, setError] = useState(false)
  function submitFunction(){
    if(title === '' || ingredients==='' || steps===''){
      setError(true)
      console.log('Provide your input')
    }
  }

  return(
      <form>
        <input onChange={(e)=>setTitle(e.target.value)} type="text" id="title" value={title}/>
        <textarea onChange={(e)=>setIngredients(e.target.value)} type="text" id="ingredients" value={ingredients}></textarea>
        <textarea onChange={(e)=>setSteps(e.target.value)} type="text" id="steps " value={steps }></textarea>
        <button onClick={submitFunction} id="submission" > post the form data.</button>
      </form>
  )

}

export default Addrecipeform;