import React from 'react'
import {
   useFormik} from 'formik'



function DemoForm2() {
  const initialValues = {
    userId:"",
    password:"",
    name:"",
    addresh:"",
    country:"",
    zipcode:"",
    email:"",
    sex:"",
    language:[],
    about:""
  }

  const onSubmit = (values)=>{
    console.log(values)
  }

  const validate = (values)=>{
    const error = {}
    if(!values.userId){
      errors.userId = 'Required and must be of length 5 to 12.'
    }
    if(!values.password){
      errors.password = 'Required and must be of length 7 to 12.'
    }
    if(!values.name){
      errors.name = "Required and alphabates only."
    }
    if(!values.addresh){
      errors.addresh = "Optional"
    }
    if(!values.country){
      errors.country = "Required. must select a country"
    }
    if(!values.zipcode){
      errors.zipcode = "Required. must be numerical."
    }
    if(!values.email){
      errors.email = "Required. Must be valid email."
    }
    if(!values.sex){
      errors.sex = "Required."
    }
    if(!values.language){
      errors.language = "Required."
    }
    if(!values.about){
      errors.about = "Optional."
    }
    return error
  }

  const {handleChange,handleSubmit,values,errors,handleBlur,touched} = useFormik({
    initialValues,
    onSubmit,
    validate
  })
  return (
    <div className='bg-green-200 size-full flex justify-center items-center'>
      <div className='border border-black w-1/3 flex justify-start items-center'>
        <form onSubmit={handleSubmit} className='border border-red-500 w-full flex flex-col gap-1 p-4'>
          <h1 className='text-center text-3xl'>Registration Form</h1>

          <div className=' flex justify-between'>
            <label htmlFor="userId">User id:</label>
            <input onChange={handleChange} className='border border-black' type="text" name='userId' />
          </div>
            {(errors.userId && touched.userId) ?<p className='text-red-500'>{errors.userId}</p>:null}

          <div className=' flex justify-between'>
            <label htmlFor="password">Password:</label>
            <input onChange={handleChange} className='border border-black' type="password" name='password' />
          </div>
          {(errors.password && touched.password) ?<p className='text-red-500'>{errors.password}</p>:null}

          <div className=' flex justify-between'>
            <label htmlFor="name">Name:</label>
            <input onChange={handleChange} className='border border-black' type="text" name='name'/>
          </div>
          {(errors.name && touched.name) ?<p className='text-red-500'>{errors.name}</p>:null}

          <div className=' flex justify-between'>
            <label htmlFor="addresh">Addresh:</label>
            <input onChange={handleChange} className='border border-black' type="text" name='addresh'/>
          </div>
          {(errors.addresh && touched.addresh) ?<p className='text-red-500'>{errors.addresh}</p>:null}

          <div className=' flex justify-between'>
            <label htmlFor="country">Country:</label>
            <select onChange={handleChange} name="country" className='border border-black'>
              <option value="#">(Please select a country)</option>
              <option value="India">India</option>
              <option value="Australia">Australia</option>
              <option value="England">England</option>
              <option value="Russia">Russia</option>
            </select>
          </div>
          {(errors.country && touched.country) ?<p className='text-red-500'>{errors.country}</p>:null}

          <div onChange={handleChange} className=' flex justify-between'>
            <label htmlFor="zipcode">ZIP Code:</label>
            <input className='border border-black' type="number" name='zipcode' />
          </div>
          {(errors.zipcode && touched.zipcode) ?<p className='text-red-500'>{errors.zipcode}</p>:null}

          <div onChange={handleChange} className=' flex justify-between'>
            <label htmlFor="email">Email:</label>
            <input className='border border-black' type="email" name='email' />
          </div>
          {(errors.email && touched.email) ?<p className='text-red-500'>{errors.email}</p>:null}

          <div onChange={handleChange} className='flex justify-between '>
            <label htmlFor="sex">Sex:</label>
            <div className='flex gap-20 '>
              <div>
              <input  type="radio" name='sex' value="male"/>
              <label htmlFor="male">Male</label>
              </div>
              <div >
              <input  type="radio" name='sex' value="female"/>
              <label htmlFor="female">Female</label>
              </div>
            </div>
          </div>
          {(errors.sex && touched.sex) ?<p className='text-red-500'>{errors.sex}</p>:null}

          <div onChange={handleChange} className=' flex justify-between'>
            <label htmlFor="language">Language:</label>
           <div className='flex gap-8 '>
           <div>
              <input  type="checkbox" name='language' value="english"/>
              <label htmlFor="language">English</label>
            </div>
            <div>
              <input  type="checkbox" name='language' value="non-english"/>
              <label htmlFor="language">Non English</label>
            </div>
           </div>
          </div>
          {(errors.language && touched.language) ?<p className='text-red-500'>{errors.language}</p>:null}

          <div className=' flex justify-between'>
            <label htmlFor="about">About:</label>
            <textarea onChange={handleChange} name="about" rows={4} cols={23} className='border border-black'></textarea>
          </div>
          {(errors.about && touched.about) ?<p className='text-red-500'>{errors.about}</p>:null}

          <button type='submit' className='place-self-start bg-purple-400 text-white border border-black px-2 py-1 '>Submit</button>

        </form>
      </div>
    </div>
  )
}

export default DemoForm2
