import React from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import { httpRequest } from '../../../httpRequest'
import "./bloodBankSignup.scss";

const BloodBankSignup = function (props) {

    let { touched, errors, isSubmitting } = props

    return (
        <div className="bsignup">
            <h1 className="display-3 text-center">Register As A Blood Bank</h1>
            <div className="row">
                <div className="col-sm-6 d-flex align-items-center">
                    <img
                        src={require("../../../utils/images/blood_bank_r.jpg")}
                        alt="..."
                        className="d-block w-100"
                    />
                </div>
                <div className="col-sm-6 d-flex align-items-center">
                    <div className="b_form">
                        <Form>
                            <div className="form-group">
                                <label htmlFor="emailInput">
                                    Email Address
                                </label>
                                <small
                                    className={
                                        touched.email && errors.email
                                            ? "form-text error-msg"
                                            : "hidden"
                                    }
                                >
                                    {touched.email &&
                                        errors.email &&
                                        errors.email}
                                </small>
                                <Field
                                    type="email"
                                    className={
                                        touched.email && errors.email
                                            ? "form-control is-invalid"
                                            : "form-control"
                                    }
                                    id="emailInput"
                                    name="email"
                                    aria-describedby="email-help"
                                />
                                <small
                                    id="emailHelp"
                                    className="form-text text-muted"
                                >
                                    We'll never share your email with anyone
                                    else.
                                </small>
                            </div>
                            <div className="form-group">
                                <label htmlFor="passwordInput">Password</label>
                                <small
                                    className={
                                        touched.password && errors.password
                                            ? "form-text error-msg"
                                            : "hidden"
                                    }
                                >
                                    {touched.password &&
                                        errors.password &&
                                        errors.password}
                                </small>
                                <Field
                                    type="password"
                                    className={
                                        touched.password && errors.password
                                            ? "form-control is-invalid"
                                            : "form-control"
                                    }
                                    id="passwordInput"
                                    name="password"
                                />
                                <small
                                    id="passwordInstruction"
                                    className="form-text text-muted"
                                >
                                    Password should containe atleast one number,
                                    one chracter and one special symbol
                                </small>
                            </div>
                            <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                                Register
                            </button>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    );
};

const BloodBankSignupFormik = withFormik({
    mapPropsToValues: () => {
        return {
            email: "",
            password: "",
        };
    },
    validationSchema: Yup.object().shape({
        email: Yup.string().email().required(),
        password: Yup.string().min(7).required(),
    }),
    handleSubmit(values, formikBag) {

        const { props, resetForm, setErrors, setSubmitting } = formikBag

        httpRequest.post('/bloodbank/signup', values)
            .then(responce => {
                if(responce.data === 'User already exit'){
                    setErrors({ email : 'User already exit' })
                    setSubmitting(false)
                    return
                }
                resetForm()
                setSubmitting(false)
                props.history.push('/login')
            })
            .catch(error => {
                console.log(error);
            })
    },
})(BloodBankSignup);

export default BloodBankSignupFormik;
