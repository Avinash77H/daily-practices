import React from 'react'
import background3 from '../assets/background3.jpg'
import { useFormik } from 'formik'
import * as Yup from 'yup'

function Thapa() {
  const initialValues = {
    name:"",
    email:"",
    password:"",
    confirm_password:""
  }

  const onSubmit = (values,action)=>{
    
    console.log(values)
    action.resetForm()
    
  }

  const formSchema = Yup.object({
    name:Yup.string().min(2,'atlease 2 character require').required("*Require"),
    email:Yup.string().email('Invalid Email').required("*Required"),
    password:Yup.string().required('*Required'),
    confirm_password:Yup.string().oneOf([Yup.ref('password'),null]).required("*Required")
  })

 const {values,touched,handleChange,handleBlur,handleSubmit,errors} = useFormik({
    initialValues,
    onSubmit,
    validationSchema:formSchema
  })
  
  return (
    <div className='w-screen h-screen flex justify-center items-center bg-cover bg-no-repeat bg-center' style={{backgroundImage:`url(${background3})`}}>
      <div className='border border-black bg-green-100 p-20 ' >
        <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
          <div className='border border-gray-400 px-2'>
            <label htmlFor="name">Name</label><br />
            <input value={values.name} onChange={handleChange} onBlur={handleBlur} type="text" name="name" id='name' placeholder='Name'   className='bg-transparent outline-none '/>
            {touched.name && errors.name?<p className="text-red-500">{errors.name}</p>:null}
          </div>

          <div className='border border-gray-400 px-2'>
            <label htmlFor="email">Email</label><br />
            <input value={values.email} onChange={handleChange} onBlur={handleBlur} type="text" name='email' id='email' placeholder='Email' className='bg-transparent outline-none '/>
            {touched.email && errors.email?<p className="text-red-500">{errors.email}</p>:null}
          </div>
          
          <div className='border border-gray-400 px-2'>
            <label htmlFor="password">Password</label><br />
            <input value={values.password} onChange={handleChange} onBlur={handleBlur} type="password" name='password' id='password' placeholder='password' className='bg-transparent outline-none '/>
            {touched.password && errors.password?<p className="text-red-500">{errors.password}</p>:null}
          </div>

          <div className='border border-gray-400 px-2'>
            <label htmlFor="confirm_password">Confirm Password</label><br />
            <input value={values.confirm_password} onChange={handleChange} onBlur={handleBlur} type="password" name='confirm_password' id='confirm_password' placeholder='Confirm Password' className='bg-transparent outline-none '/>
            {touched.confirm_password && errors.confirm_password?<p className="text-red-500">{errors.confirm_password}</p>:null}
          </div>

          <button type='submit' className='px-4 py-2 bg-blue-300 text-white place-self-center'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Thapa
