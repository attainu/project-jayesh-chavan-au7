import React, { useState } from "react";
import _ from "lodash";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import { connect } from 'react-redux'
import { fetchBloodBankSuccess } from '../../../redux/bloodBank/bloodBankAction'
import { httpRequest } from '../../../httpRequest'

const UpdateBank = function (props) {
    let { isSubmitting, values, touched, errors } = props;

    const [ReRender, setReRender] = useState(false);

    const cities = require("../../../utils/json/cities.json");
    const cities_state = require("../../../utils/json/cities-state.json");

    const selectState = (selectedCity) => {
        values.city = selectedCity;
        let obj = cities_state.filter((city) => selectedCity === city.name);
        values.state = obj[0].state;
        setReRender(!ReRender);
    };

    return (
        <div className="container updateForm">
            <Form>
                <div className="form-row">
                    <div className="form-group col-md-8">
                        <label htmlFor="Name">Name Of Blood Bank:</label>
                        <Field
                            type="text"
                            className="form-control"
                            id="Name"
                            name="name"
                        />
                        <small className="form-text text-muted">
                            Enter first name of blood bank
                        </small>
                    </div>
                    <div className="form-group col-md-4">
                        <label htmlFor="Email">Email :</label>
                        <Field
                            type="email"
                            className={
                                touched.email && errors.email
                                    ? "form-control is-invalid"
                                    : "form-control"
                            }
                            id="Email"
                            name="email"
                        />
                        <small
                            className={
                                touched.email && errors.email
                                    ? "form-text error-msg"
                                    : "hidden"
                            }
                        >
                            {touched.email && errors.email && errors.email}
                        </small>
                        <small className="form-text text-muted">
                            We'll never share your email with anyone else.
                        </small>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="firstAdd">First Line Of Address</label>
                        <Field
                            className="form-control"
                            id="firstAdd"
                            name="first_line_add"
                        />
                        <small className="form-text text-muted">
                            Enter first line of address
                        </small>
                    </div>
                    <div className="form-group col-md-6">
                    <label htmlFor="lastAdd">Second Line Of Address</label>
                        <Field
                            className="form-control"
                            id="lastAdd"
                            name="second_line_add"
                        />
                        <small className="form-text text-muted">
                            Enter last second of address
                        </small>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-4">
                        <label htmlFor="City">City : </label>
                        <Field
                            className="form-control"
                            as="select"
                            id="City"
                            name="city"
                            onChange={(e) => selectState(e.target.value)}
                        >
                            {_.map(cities, (city, idx) => {
                                return (
                                    <option value={city} key={idx}>
                                        {city}
                                    </option>
                                );
                            })}
                        </Field>
                    </div>
                    <div className="form-group col-md-4">
                        <label htmlFor="State">State : </label>
                        <Field
                            type="text"
                            className="form-control"
                            id="State"
                            name="State"
                            placeholder={values.state}
                            disabled={true}
                        />
                    </div>
                    <div className="form-group col-md-4">
                        <label htmlFor="Category">Category : </label>
                        <Field
                            type="text"
                            as="select"
                            className="form-control"
                            id="Category"
                            name="category"
                        >
                            <option value="Private">Private</option>
                            <option value="Charity">Charity</option>
                            <option value="Gov">Goverment</option>
                        </Field>
                    </div>
                </div>
                <button
                    type="submit"
                    className="btn btn-success"
                    disabled={isSubmitting}
                >
                    Update Blood Bank
                </button>
            </Form>
        </div>
    );
};

const updateBloodBankFormik = withFormik({
    mapPropsToValues: ({ bloodBankData }) => {

        let bloodBank = bloodBankData.bloodBank

        return {
            name: bloodBank.name ||"",
            email: bloodBank.email || "",
            city: bloodBank.city || "",
            state: bloodBank.state || "State will automatically get selected",
            category: bloodBank.category || "",
            first_line_add: bloodBank.first_line_add || "",
            second_line_add: bloodBank.second_line_add || ""
        };
    },
    validationSchema: Yup.object().shape({
        email: Yup.string().email(),
    }),
    handleSubmit(values, formikBag) {
        const { props, setSubmitting } = formikBag;

        console.log(values);
        httpRequest.post('/bloodbank/update-bank', values)
            .then(responce => {
                console.log(responce);
                props.updateBloodBank(responce.data)
                props.navigate()
                setSubmitting(false);
            })

    },
})(UpdateBank);

let mapDispatchToProps = dispatch => {
    return{
        updateBloodBank : updatedBloodBank => dispatch( fetchBloodBankSuccess(updatedBloodBank) )
    }
}

export default connect(null,mapDispatchToProps)(updateBloodBankFormik);
