import React from 'react'
import { useFormik} from 'formik'

function Form() {

  let initialValues = {
    fullName:"",
    email:"",
    password:""
  }

  const onSubmit = (values)=>{
    console.log(values)
  }

  const validate = (values)=>{
    const errors = {}
    if(!values.fullName){
      errors.fullName = "Require"
    }
    if(!values.email){
      errors.email = "Require"
    }else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
    ) {
      errors.email = 'Invalid email address';
    }
    if(!values.password){
      errors.password = "Require"
    }
    return errors
  }

  let formik = useFormik({
    initialValues,
    onSubmit,
    validate
})
  
  return (
    <div className='w-screen h-screen flex justify-center items-center'>
      <div className="bg-green-200 p-8">
        <form onSubmit={(e)=>{
          e.preventDefault()
          formik.handleSubmit()
        }} className='flex flex-col gap-4 '>
            <div>
                <label htmlFor="fullName">fullName</label><br />
                <input onChange={formik.handleChange}  type="text" id='fullName' name='fullName' className="pl-2 outline-none"/>
                {formik.errors.fullName?<p>{formik.errors.fullName}</p>:null}
            </div>

            <div>
                <label htmlFor="email">email</label><br />
                <input onChange={formik.handleChange} type="email" id='email' name='email' className="pl-2 outline-none"/>
                {formik.errors.email?<p>{formik.errors.email}</p>:null}
            </div>

            <div>
                <label htmlFor="password">password</label><br />
                <input onChange={formik.handleChange} type="password" id='password' name='password' className="pl-2 outline-none"/>
                {formik.errors.password?<p>{formik.errors.password}</p>:null}
            </div>

            <button type='submit' className="bg-purple-400 text-white font-semibold px-2 py-1 rounded-md">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Form
