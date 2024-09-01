import {useFormik} from 'formik'
import * as Yup from 'yup'
import {useState} from 'react'
import React from 'react'
function Registration(){
  const [username,setUsername]= useState('')
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const formik = useFormik({
    initialValues:{
      username:'',
      email:'',
      password:''
    },

    validationSchema:Yup.object({
      username:Yup.string().required('User name is required'),
      email:Yup.string().required('Invalid email'),
      password:Yup.string().required('Fill password')
    }),

    onSubmit:(values)=>{
      console.log('form submitted',values)
    }

   })
  return(
   <>
   <form onSubmit={formik.handleSubmit}>

    <input type="text" name='username' placeholder="username" value={formik.values.username}  onChange={formik.handleChange}/>
    <input type="email" name='email' placeholder="email" value={formik.values.email} onChange={formik.handleChange}/>
    <input type="password" name='password' placeholder="password" value={formik.values.password} onChange={formik.handleChange}/>
    <button type='submit'>Submit</button>
   </form>
   </>
  );
}

export default Registration;