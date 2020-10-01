import React, { useState } from "react";
import _ from "lodash";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import { connect } from 'react-redux'
import { fetchVolunteerSuccess } from '../../../redux/volunteer/volunteerAction'
import { httpRequest } from '../../../httpRequest'
import DatePick from '../../shared/Datepicker'
import "./volunteerProfileUpdate.scss";
import UploadFile from "../../shared/FileUpload";

const Update = function (props) {
    let { volunteerData ,values, isSubmitting, touched, errors } = props;

    let profile = volunteerData.profile

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
                    <div className="form-group col-md-4">
                        <label htmlFor="First_Name">First Name :</label>
                        <Field
                            type="text"
                            className="form-control"
                            id="First_Name"
                            name="first_name"
                        />
                        <small className="form-text text-muted">
                            Enter first name
                        </small>
                    </div>
                    <div className="form-group col-md-4">
                        <label htmlFor="Last_Name">Last Name :</label>
                        <Field
                            type="text"
                            className="form-control"
                            id="Last_Name"
                            name="last_name"
                        />
                        <small className="form-text text-muted">
                            Enter last name
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
                        <label htmlFor="Pincode">Pincode : </label>
                        <Field
                            type="text"
                            className="form-control"
                            id="Pincode"
                            name="pincode"
                        />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-4">
                        <label htmlFor="Blood_Group">Blood_Group :</label>
                        <Field
                            className="form-control"
                            as="select"
                            id="Blood_Group"
                            name="blood_group"
                        >
                            <option value="A-">A-</option>
                            <option value="A+">A+</option>
                            <option value="B-">B-</option>
                            <option value="B+">B+</option>
                            <option value="O-">O-</option>
                            <option value="O+">O+</option>
                            <option value="AB-">AB-</option>
                            <option value="AB+">AB+</option>
                        </Field>
                        <small className="form-text text-muted">
                            Enter your blood group
                        </small>
                    </div>
                    <div className="form-group col-md-4">
                        <label htmlFor="DOB" className="d-block">Date of birth :</label>
                            <DatePick className="form-control d-block" name="date_of_birth" id="DOB"/>
                            <small className="form-text text-muted">
                                Enter your date of birth
                            </small>
                    </div>
                    <div className="form-group col-md-4">
                        <label htmlFor="Gender">Gender : </label>
                        <div className="d-flex">
                            <div className="form-check">
                                <Field
                                    type="radio"
                                    className="form-check-input"
                                    id="Male"
                                    name="gender"
                                    value="Male"
                                />
                                <label
                                    className="form-check-label"
                                    htmlFor="Male"
                                >
                                    Male
                                </label>
                            </div>
                            <div className="form-check">
                                <Field
                                    type="radio"
                                    className="form-check-input"
                                    id="Female"
                                    name="gender"
                                    value="Female"
                                />
                                <label
                                    className="form-check-label"
                                    htmlFor="Female"
                                >
                                    Female
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <button
                    type="submit"
                    className="btn btn-success"
                    disabled={isSubmitting}
                >
                    Update Profile
                </button>
            </Form>
            <div className="d-flex justify-content-center align-items-center update-photo">
                <div>
                    <h1 className="display-4">Upload profile photo</h1>
                    <UploadFile fileName={profile._id} navigate={props.navigate}/>
                </div>
            </div>
        </div>
    );
};

const updateFormik = withFormik({
    mapPropsToValues: ({ volunteerData }) => {

        let profile = volunteerData.profile

        return {
            first_name: profile.first_name ||"",
            last_name: profile.last_name || "",
            email: profile.email || "",
            city: profile.city || "",
            state: profile.state || "State will automatically get selected",
            pincode: profile.pincode || "",
            date_of_birth: profile.date_of_birth || "",
            blood_group: profile.blood_group || "",
            gender: profile.gender || "",
        };
    },
    validationSchema: Yup.object().shape({
        email: Yup.string().email(),
    }),
    handleSubmit(values, formikBag) {
        const { props, setSubmitting } = formikBag;

        httpRequest.post('/volunteer/update-user', values)
            .then(responce => {
                console.log(responce);
                props.updateProfile(responce.data)
                props.navigate()
                setSubmitting(false);
            })

    },
})(Update);

let mapDispatchToProps = dispatch => {
    return{
        updateProfile : updatedProfile => dispatch( fetchVolunteerSuccess(updatedProfile) )
    }
}

export default connect(null,mapDispatchToProps)(updateFormik);
