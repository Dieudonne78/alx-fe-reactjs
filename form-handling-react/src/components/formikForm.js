import {useFormik} from 'formik'
import * as Yup from 'yup'


const FormikForm = ()=>{
  ["Field", "ErrorMessage"]
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
     {formik.touched && formik.errors && <small>{formik.errors.username}</small>}
     <input type="email" name='email' placeholder="email" value={formik.values.email} onChange={formik.handleChange}/>
     {formik.touched && formik.errors && <small>{formik.errors.email}</small>}
     <input type="password" name='password' placeholder="password" value={formik.values.password} onChange={formik.handleChange}/>
     {formik.touched && formik.errors && <small>{formik.errors.password}</small>}
     <button type='submit'>Submit</button>
    </form>
    </>
   );
}

export default FormikForm;