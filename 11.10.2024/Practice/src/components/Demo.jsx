import React from "react";
// import {formik} from "formik"
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

  const onSubmit = (values)=>{
   
    console.log(values)
  }

  const userSchema = Yup.object({
    name:Yup.string().min(2,"atlease 2 character Require").required("Require"),
    email:Yup.string().email("Email is invalid").required("Required"),
    school:Yup.string().min(2,"atlease 5 character Require").required("Require"),
    phone:Yup.number().min(10,"minimum 10 number required").required("Required"),
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
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="enter your name"
              
            />
            <ErrorMessage name="name" className="text-red-500"></ErrorMessage>
          </div>

          {/* email */}
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Email address
            </label>
            <Field
              type="email"
              id="email"
              name="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="john.doe@company.com"
              required
            />
            <ErrorMessage name="email"></ErrorMessage>
          </div>

          <div>
            <label
              htmlFor="school"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              School
            </label>
            <Field
              type="text"
              id="school"
              name="school"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter School Name"
              
            />
            <ErrorMessage name="school"></ErrorMessage>
          </div>

          <div>
            <label
              htmlFor="phone"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Phone number
            </label>
            <Field
              type="tel"
              id="phone"
              name="phone"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="123-45-678"
             
              required
            />
            <ErrorMessage name="phone"></ErrorMessage>
          </div>

        </div>

        <div className="flex justify-between">
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
           <ErrorMessage name="gender"></ErrorMessage>
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
            <ErrorMessage name="courses"></ErrorMessage>
          </div>

          <div className="flex flex-col gap-1">
           
            <label htmlFor="location">Institute Location</label>
              <Field name="location" as="select" >
                <option value="Junagadh">Junagadh</option>
                <option value="Surat">Surat</option>
                <option value="Rajkot">Rajkot</option>
              </Field>
          </div>
          <ErrorMessage name="location"></ErrorMessage>
        </div>
      
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-4"
        >
          Submit
        </button>

      </Form>
      </Formik>
    </div>
  );
}

export default Demo;
