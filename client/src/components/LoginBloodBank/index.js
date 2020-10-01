import React from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import { httpRequest } from "../../httpRequest";
import "./loginbloodbank.scss";

const LoginBloodBank = function ({ touched, errors, isSubmitting }) {
    return (
        <div className="container b-login">
            <Form>
                <div className="form-group">
                    <label htmlFor="emailBank">Email Address</label>
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
                        id="emailBank"
                        name="email"
                        aria-describedby="email-help"
                    />
                    <small id="emailHelp" className="form-text text-muted">
                        We'll never share your email with anyone else.
                    </small>
                </div>
                <div className="form-group">
                    <label htmlFor="passwordBank">Password</label>
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
                        id="passwordBank"
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
                <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={isSubmitting}
                >
                    Login As BloodBank
                </button>
            </Form>
        </div>
    );
};

const LoginFormikBloodBank = withFormik({
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
        const { props, resetForm, setErrors, setSubmitting } = formikBag;

        httpRequest
            .post("/bloodbank/login", values)
            .then((responce) => {
                if (responce.data === "Invalid Credentials !!") {
                    setErrors({ email: "Wrong Credintials" });
                    setSubmitting(false);
                    return;
                }
                resetForm();
                setSubmitting(false);
                props.history.push("/bloodbank-dashboard");
            })
            .catch((error) => {
                console.log(error);
            });
    },
})(LoginBloodBank);

export default LoginFormikBloodBank;
