import React from 'react'
import { withRouter } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import './style.css'

function SignUp(props) {

    let initialValues = {
        userName: '',
        password: '',
        firstName:'',
        lastName:'',
        
        
    }
    let validationSchema = yup.object().shape({
        userName: yup.string().email("enter valid email").required("email is required"),
        password: yup.string().required("password is required").min(5),
        firstName: yup.string().required("first name is required").min(4),
        lastName: yup.string().required("last name is required").min(2),


        })

    let onSubmit = (values, props) => {
        console.log(values);
        props.resetForm()
    }

    let navigateToLogin=()=>{
        // console.log(props);
        props.history.push('/login')
       }
    return (
        <div className='container border mt-5'>
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}>

            {(props) => (
                <Form>
                    <div className='container'>

                    <div className="mb-3">
                            <label>First Name</label>
                            <Field

                                type="text"
                                className="form-control"
                                placeholder="Enter First Name"
                                name="firstName"
                                autoComplete="off"

                            />
                            <p className='error'><ErrorMessage name="firstName" /></p>
                        </div>
                        <div className="mb-3">
                            <label>Last Name</label>
                            <Field

                                type="text"
                                className="form-control"
                                placeholder="Enter Last Name"
                                name="lastName"
                                autoComplete="off"

                            />
                            <p className='error'><ErrorMessage name="lastName" /></p>
                        </div>

                        <div className="mb-3">
                            <label>Email</label>
                            <Field

                                type="text"
                                className="form-control"
                                placeholder="Enter Email"
                                name="userName"
                                autoComplete="off"

                            />
                            <p className='error'><ErrorMessage name="userName" /></p>
                        </div>
                        <div className="mb-3">
                                <label>Password</label>
                                <Field

                                    type="password"
                                    className="form-control"
                                    placeholder="Enter Password"
                                    name="password"
                                />
                                <p className='error'><ErrorMessage name="password" /></p>

                            </div>
                        <button type="submit" className="btn btn-primary" >Login</button>
                        <h5 style={{cursor:'pointer'}} onClick={navigateToLogin}>Already have an account? Login here !</h5>
                        </div>

                       
                    </Form>
                )}
            </Formik>
        </div>
    );
}

export default withRouter(SignUp)

