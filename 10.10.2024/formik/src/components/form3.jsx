import React from "react";

import * as Yup from "Yup";
import { Formik, Field, ErrorMessage } from "formik";

function Form3() {
  let initialValues = {
    fullName: "",
    email: "",
    password: "",
  };

  const onSubmit = (values) => {
    console.log(values);
  };

  let userSchema = Yup.object({
    fullName: Yup.string()
      .min(5, "minimum 5 character required")
      .required("*Required"),
    email: Yup.string().email("invalid email").required("*Required"),
    password: Yup.string().required("*Required"),
  });

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="bg-green-200 p-8">
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={userSchema}
        >
          <form className="flex flex-col gap-4 ">
            <div>
              <label htmlFor="fullName">fullName</label>
              <br />
              <Field
                type="text"
                id="fullName"
                name="fullName"
                className="pl-2 outline-none"
              />
              <br />
              <ErrorMessage name="fullName"></ErrorMessage>
            </div>

            <div>
              <label htmlFor="email">email</label>
              <br />
              <Field
                type="email"
                id="email"
                name="email"
                className="pl-2 outline-none"
              />
              <br />
              <ErrorMessage name="email"></ErrorMessage>
            </div>

            <div>
              <label htmlFor="password">password</label>
              <br />
              <Field
                type="password"
                id="password"
                name="password"
                className="pl-2 outline-none"
              />
              <br />
              <ErrorMessage name="password"></ErrorMessage>
            </div>

            <button
              type="submit"
              className="bg-purple-400 text-white font-semibold px-2 py-1 rounded-md"
            >
              Submit
            </button>
          </form>
        </Formik>
      </div>
    </div>
  );
}

export default Form3;
