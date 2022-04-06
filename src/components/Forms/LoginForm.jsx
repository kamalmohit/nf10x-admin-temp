import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Button from 'globals/UIComponents/Button/Button';
import Puff from 'assets/puff.svg'

const LoginForm = (props) => {
    const initialValues = {
        email: "",
        password: "",
    }
    const handleValidation = (values) => {
        let errors = {};
        if (!values.email) {
            errors.email = "Email cannot be empty";
        }
        if (!values.password) {
            errors.password = "Password cannot be empty";
        }
        return errors;
    }
    return (
        <Formik validateOnBlur={false} validate={handleValidation} initialValues={initialValues} onSubmit={props.handleUserAuth}>
            {(formProps) => (
                <Form>
                    <div>
                        <h3 className="text-xs opacity-50 mb-1">Email Address</h3>
                        <Field autoComplete="off" className="w-full p-2 rounded-md mb-1" type="email" name="email" />
                        <ErrorMessage name="email">{msg => <span className="error">{msg}</span>}</ErrorMessage>
                    </div>
                    <div>
                        <h3 className="text-xs opacity-50 mb-1">Password</h3>
                        <Field autoComplete="off" className="w-full p-2 rounded-md mb-1" type="password" name="password" />
                        <ErrorMessage name="password">{msg => <span className="error">{msg}</span>}</ErrorMessage>
                    </div>
                    <div className="mb-2">
                        <button type="button" onClick={props.handleForgotPassword}>Forgot Password?</button>
                    </div>
                    <Button type="submit" text="Login" classes="w-full text-[18px] flex justify-center items-center">
                        {formProps.isSubmitting ? <img className="w-6 h-6 mr-2" src={Puff} alt="sadsd" /> :
                        <span>Login</span>}
                    </Button>
                </Form>
            )}
        </Formik>
    )
}

export default LoginForm;