import {useState} from 'react'
import React from 'react'
function Registration(){
  const [username,setUsername]= useState('')
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [errors,setErrors]=useState(false)
  
  if(!username||!password||!email){
    setErrors(true)
  }
  const handleSubmit = (e)=>{
    e.preventDefault()
    
    console.log("Inputs:",username,email,password)
}
  return(
   <>
   <form onSubmit={handleSubmit}>

    <input type="text" name='username' placeholder="username" value={username}  onChange={(e)=>setUsername(e.target.value)}/>
    <input type="email" name='email' placeholder="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
    <input type="password" name='password' placeholder="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
    {errors && <span>Eiher username,email or password is empty</span>}
    <button type='submit'>Submit</button>
   </form>
   </>
  );
}

export default Registration;