import React, {useReducer } from 'react'
import {Formik,Form,Field,ErrorMessage} from "formik"
import * as Yup from "yup"


function App() {
  const initialvalues = {
    firstName: "",
    lastName: ""
  }
  
  const submitHandler = (values,{resetForm})=>{
    console.log(values)
    resetForm()
  }

  const validationSchema = Yup.object({
    firstName:Yup.string().min(3,'minimum 3 character require').required('require'),
    lastName:Yup.string().min(3,'minimum 3 character require').required('required')
  })
 
  return (
    
  <div className='h-screen flex justify-center items-center'>
      <div >
      <Formik initialValues={initialvalues} onSubmit={submitHandler} validationSchema={validationSchema}>
      <Form  className='flex flex-col gap-8 items-center'>
       <div>
       <label htmlFor="firstName">First Name</label>
       <Field type="text" name="firstName" className="border border-black"></Field>
       <ErrorMessage name="firstName" component="div"/>
       </div>
       <div>
       <label htmlFor="lastName">Last Name</label>
       <Field type="text" name="lastName" className="border border-black"></Field>
       <ErrorMessage name="lastName" component="div"/>
       </div>
       <button type='submit' className='bg-green-500 text-white px-2 py-1 rounded-md'>submit</button>
      </Form>
      </Formik>
    </div>
  </div>
  )
}

export default App
