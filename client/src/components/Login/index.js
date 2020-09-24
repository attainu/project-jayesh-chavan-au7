import React from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
import './login.scss'

const Login = function ({ touched, errors, isSubmitting }) {
    return (
        <div className="container v-login">
            <Form>
                <div className="form-group">
                    <label htmlFor="emailInput">Email Address</label>
                    <small
                        className={
                            touched.email && errors.email
                                ? "form-text error-msg"
                                : "hidden"
                        }
                    >
                        {touched.email && errors.email && errors.email}
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
                    <small id="emailHelp" className="form-text text-muted">
                        We'll never share your email with anyone else.
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
                        {touched.password && errors.password && errors.password}
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
                        Password should containe atleast one number, one
                        chracter and one special symbol
                    </small>
                </div>
                <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                    Register
                </button>
            </Form>
        </div>
    );
};

const LoginFormik = withFormik({
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

        const { props, resetForm, setErrors, setSubmitting} = formikBag

        const voluteerSignup = axios.create({
            baseURL:'http://localhost:4000/',
            withCredentials: true
        });

        voluteerSignup
            .post("/volunteer/login", values)
            .then((responce) => {
                if(responce.data === 'Invalid Credentials !!'){
                    setErrors({ email : 'Wrong Credintials' })
                    setSubmitting(false)
                    return
                }
                resetForm()
                setSubmitting(false)
                props.history.push('/volunteer-dashboard')
            })
            .catch((error) => {
                console.log(error);
            });
    }
})(Login);

export default LoginFormik;
