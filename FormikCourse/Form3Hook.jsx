import { useFormik } from 'formik'
import React from 'react';
import { Formik,Form,Field,ErrorMessage } from 'formik';

const Form3Hook = () => {
    const formikProps = {
        initialValues: {email:""},
        validation:values => {
            const errors = {};
            if (!values.email) {
              errors.email = 'Required';
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = 'Invalid email address';
            }
            return errors;
          },
        onSubmit: values =>{
            console.log(values);
        }
    }
  return (
    <div className="formContainer">
    <Formik {...formikProps}>
            <Form>
                <label htmlFor="email">Email    : </label>
                <Field type="email" name="email"/>
                <ErrorMessage name='email' component="span" />
                <button type='submit' className='btn btn-submit'>submit</button>
            </Form>
    </Formik>
</div>
  )
}

export default Form3Hook