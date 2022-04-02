import React from 'react';
import "../styles/practice.css";
import { Formik } from 'formik'
const MyFormicForm = () => {
    return (
        <div className="form_container">
            <h3>CONTACT US</h3>
            <Formik
                initialValues={{
                    firstName: ''
                }}
                validate={values => {
                    const errors = {};
                    if (!values.firstName) {
                        errors.firstName = "This Field is Required";
                    }
                    if (!values.email) {
                        errors.email = "This feild is required";
                    } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                    ) {
                        errors.email = "InValid Email Format";
                    }
                    return errors;
                }}
                onSubmit={(values) => {
                    console.log(values);
                }}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                }) => (
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="firstName">FIRSTNAME : </label>
                        <input
                            type="text"
                            name="firstName"
                            id="firstName"
                            onChange={handleChange}
                            value={values.firstName}
                            onBlur={handleBlur}
                        />
                        <br />
                        {errors ? <span>{errors.firstName}</span> : null}
                        <br />
                        <label htmlFor="email">EMAIL</label>
                        <input
                        
                            type="email"
                            name="email"
                            id="email"
                            onChange={handleChange}
                            value={values.emailAdd}
                            onBlur={handleBlur}
                        />
                        <br />
                        {errors ? <span>{errors.email}</span> : null}
                        <br />
                        <button type='submit' className='btn btn-light'>Submit</button>
                    </form>
                )}
            </Formik>
        </div>
    )
}

export default MyFormicForm