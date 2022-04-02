 npm install formik --save
# formik
-> it is the react js library used for convneying the forms task

# Initilization
-> import {formik} from 'formik'
-> to reduce the boiler plate{
    import {formik, Form, Feild, ErrorMessage} from 'formik';
}
# its destructured compoenents
{({
         values,
         errors,
         touched,
         handleChange,
         handleBlur,
         handleSubmit,
         isSubmitting,
         /* and other goodies */
       }) => ()


# formik parameters
<Formik
initialValues,
validate
onSubmit
>

# use of {From, Field, ErrorMessage}:

<Formik
parameters all same
>

{(isSubmitting)=>(   // no need to write all its destructured components
you not need to write anything 
you can directly do
eg:

<Formik {...formProps}>
  <Form>
    <Field/>
  </From>
</Formik>
)}
</Formik>

# Yup extension
npm install yup

import yup in your folder

import * as yup from 'yup'; -> this means import everythin from the yup;


now you use 
<Formik
initialValues,
validationSchema,
onSubmit
></Formik>

insider validation scema we use
eg 
validationSchema = yup.object({
  firstName: yup.string().defined();
  sex: yup
  .required('This field is required ! ')  => this will capture the error message && this can also run after a callback function
  .mixed().
  oneOf(['male','female','other] as const)
  .defined()
  birthDate: yup.date().nullable().min(new Date(1990,0,1))
});

# Note : All method up ^^ can be used in both function base compoenet and class base component


# Hook method for functional compoenent

useFormik hook

you cannot the {Form, Field, ErrorMesage with hooks}
you should use xml 

const formik = useFormik({
  initialValues:,
  onSubmit:,
  validation:,   || valicationSchema:
})

no need to mention any of its descructured components

we use
<input
type="text"
name="firstname"
{...formik.getFieldProps("firstname")} => after doing this you will get all the features of onchange onblur and values;
/>