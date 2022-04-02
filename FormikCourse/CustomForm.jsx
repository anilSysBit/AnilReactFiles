import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik'

const CustomForm = () => {
    const formikProps = {
        initialValues: {
            email: "",
            firstName: ""
        },
        validate: values => {
            const errors = {};
            if (!values.email) {
                errors.email = 'Required';
            } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
                errors.email = 'Invalid email address';
            }

            if (!values.firstName) {
                errors.firstName = "This feild is required";
            }
            return errors;
        },
        onSubmit: values => {
            console.log(values);
        }
    }

    const customComponent = ({
        field,
        form: { touched, errors },
        ...props
    }) => (
        <>
            <input
                type="text"
                placeholder={props.placeholder}
                {...field}
            />
            {
                errors[field.name] && touched[field.name] ?
                    <span>{errors[field.name]}</span> : null
            }
        </>
    )
    return (
        <div className="formContainer">
            <Formik {...formikProps}>
                <Form>
                    <label htmlFor="email">Email    : </label>
                    <Field type="email" name="email" />
                    <ErrorMessage name='email' />
                    <Field
                        name="firstName"
                        component={customComponent}
                        placeholder="Enter First Name"
                    />
                    <button type='submit' className='btn btn-submit'>submit</button>
                </Form>
            </Formik>
        </div>
    )
}

export default CustomForm