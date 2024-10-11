import React from "react";
import * as Yup from "yup"
import { Formik,ErrorMessage,Field,Form } from "formik";

function Demo() {
  const initialValues = {
    name:"",
    email:"",
    school:"",
    phone:"",
    gender:""
  }

  const onSubmit = (values,{resetForm})=>{
   
    console.log(values)
    resetForm()
  }

  const userSchema = Yup.object({
    name:Yup.string().min(2,"atlease 2 character Require").required("Require"),
    email:Yup.string().email("Email is invalid").required("Required"),
    school:Yup.string().min(2,"atlease 5 character Require").required("Require"),
    phone:Yup.string().required('mobile number is required').matches(/^[0-9]+$/,'mobile number must contain only number').min(10,'mobile number must be at last 10 digit').max(10,'mobile number cannot exceed 10 digits'),
    gender:Yup.string().required("Gender is Required"),
    courses:Yup.array().min(1,'Please select atleast 1 course'),
    location:Yup.string().required('Please select atleast 1 location')
  }) 
  return (

    <div>
      <Formik initialValues={initialValues} onSubmit={onSubmit}
       validationSchema={userSchema}>
      <Form>
        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              First name
            </label>
            <Field
              type="text"
              id="name"
              name="name"
              className=" border  text-sm rounded-lg block w-full p-2.5"
              placeholder="enter your name"
              
            />
           <div className="text-red-500">
           <ErrorMessage name="name" ></ErrorMessage>
           </div>
          </div>

          {/* email */}
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium "
            >
              Email address
            </label>
            <Field
              type="email"
              id="email"
              name="email"
              className=" text-sm rounded-lg  block w-full p-2.5 "
              placeholder="john.doe@company.com"
              required
            />
            <div className="text-red-500"><ErrorMessage name="email"></ErrorMessage></div>
          </div>

          <div>
            <label
              htmlFor="school"
              className="block mb-2 text-sm font-medium "
            >
              School
            </label>
            <Field
              type="text"
              id="school"
              name="school"
              className="text-sm rounded-lg block w-full p-2.5 "
              placeholder="Enter School Name"
              
            />
            <div className="text-red-500">
            <ErrorMessage name="school"></ErrorMessage>
            </div>
          </div>

          <div>
            <label
              htmlFor="phone"
              className="block mb-2 text-sm font-medium "
            >
              Phone number
            </label>
            <Field
              type="tel"
              id="phone"
              name="phone"
              className="text-sm rounded-lg  block w-full p-2.5 "
              placeholder="123-45-678"
            />
            <div className="text-red-500">
            <ErrorMessage name="phone"></ErrorMessage>
            </div>
          </div>

        </div>

        <div className="flex justify-between gap-8">
          <div>
            
            <label htmlFor="gender" className="font-semibold">Gender</label>
           <div className="flex gap-1">
           <Field type="radio" name="gender" id="gender" value="male"/>
           <p>Male</p>
           </div>
           <div className="flex gap-1">
           <Field type="radio" name="gender" id="gender" value="female"/>
           <p>Female</p>
           </div>
           <div className="text-red-500">
           <ErrorMessage name="gender"></ErrorMessage>
           </div>
          </div>

          <div>
            
            <label htmlFor="courses" className="font-semibold">Course</label>
            <div className="flex gap-1">
              <Field type="checkbox" name="courses" value="It" />
                <p>It</p>
            </div>
            <div className="flex gap-1">
              <Field type="checkbox" name="courses" value="HRM" />
              <p>HRM</p>
            </div>
            <div className="flex gap-1">
              <Field type="checkbox" name="courses" value="English" />
              <p>English</p>
            </div>
            <div className="flex gap-1">
              <Field type="checkbox" name="courses" value="Graphic" />
              <p>Graphic Design</p>
            </div>
            <div className="text-red-500">
            <ErrorMessage name="courses"></ErrorMessage>
            </div>
          </div>

          <div className="flex flex-col gap-1">
           
            <label htmlFor="location">Institute Location</label>
              <Field name="location" as="select" >
                <option value="Junagadh">Junagadh</option>
                <option value="Surat">Surat</option>
                <option value="Rajkot">Rajkot</option>
              </Field>
              <div className="text-red-500">
          <ErrorMessage name="location"></ErrorMessage>
          </div>
          </div>
          
          
        </div>
      
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800  font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center  mt-4"
        >
          Submit
        </button>

      </Form>
      </Formik>
    </div>
  );
}

export default Demo;
