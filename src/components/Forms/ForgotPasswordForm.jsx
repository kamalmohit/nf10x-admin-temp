import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Button from 'globals/UIComponents/Button/Button';
import Puff from 'assets/puff.svg'

const ForgotPasswordForm = (props) => {
    const initialValues = {
        email: "",
    }

    const handleValidation = (values) => {
        let errors = {};
        if (!values.email) {
            errors.email = "Please enter a valid email";
        }
        return errors;
    }
    return (
        <Formik validateOnBlur={false} initialValues={initialValues} onSubmit={props.handleForgotPassword} validate={handleValidation}>
            {(formProps) => (
                <Form>
                    <div>
                        <h3 className="text-xs opacity-50 mb-1">Email Address</h3>
                        <Field autoComplete="off" className="w-full p-2 rounded-md mb-2" type="email" name="email" placeholder="" />
                        <ErrorMessage name="email">{msg => <span className="error">{msg}</span>}</ErrorMessage>
                    </div>
                    <Button type="submit" classes="w-full text-[18px] flex justify-center items-center p-2 mt-2">
                        {formProps.isSubmitting ? <img className="w-6 h-6 mr-2" src={Puff} alt="Submitting Form" /> :
                        <span>Send Instructions</span>}
                    </Button>
                </Form>
            )}
        </Formik>
    )
}

export default ForgotPasswordForm;