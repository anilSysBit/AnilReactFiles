import React from 'react';
import { Formik,Form,Field, ErrorMessage, } from 'formik';

const Form2 = () => {
  return (
    <div className="formContainer">
        <Formik
        initialValues={{ email: '', password: '' }}
        validate={values => {
          const errors = {};
          if (!values.email) {
            errors.email = 'Required';
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = 'Invalid email address';
          }
          return errors;
        }}

        onSubmit={(values,{setSubmitting})=>{
            console.log(values)
        }}
        >
            {({isSubmitting})=>(
                <Form>
                    <label htmlFor="email">Email    : </label>
                    <Field type="email" name="email"/>
                    <ErrorMessage name='email' component="div" />
                    <button type='submit' className='btn btn-submit' disabled={isSubmitting}>submit</button>
                </Form>
            )}
        </Formik>
        
    </div>
  )
}

export default Form2