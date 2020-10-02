import React from "react";
import { withFormik, Form, Field } from "formik";
import { connect } from "react-redux";
import { fetchVolunteerSuccess } from "../../../redux/volunteer/volunteerAction";
import { httpRequest } from "../../../httpRequest";

import "./volunteerProfile.scss";
const Profile = function ({ volunteerData }) {
    let profile = volunteerData.profile;

    return (
        <div className="container d-flex justify-content-center align-items-center profile ">
            <div>
                <div className="card">
                    <div className="row no-gutters">
                        <div className="col-sm-6 ">
                            <img
                                src={
                                    profile.profile_photo ?
                                    `${profile.profile_photo.firebaseUrl}` :
                                    !profile.gender ? require("../../../utils/images/Men_icon.jpg") :
                                    profile.gender === "Male" ? require("../../../utils/images/Men_icon.jpg") :
                                    require("../../../utils/images/Women_icon.jpg")
                                }
                                className="card-img"
                                alt="..."
                            />
                        </div>
                        <div className="col-sm-6">
                            <div className="card-body">
                                <h1 className="display-3">
                                    {profile.blood_group || `N/A`}
                                </h1>
                                <h5 className="card-title">
                                    {profile.first_name
                                        ? `${profile.first_name} ${profile.last_name}`
                                        : "First_Name Last_Name"}
                                </h5>
                                <p className="card-text">
                                    Date of birth :{" "}
                                    <small className="text-muted">
                                        {profile.date_of_birth || `N/A`}
                                    </small>
                                </p>
                                <p className="card-text">
                                    City :{" "}
                                    <small className="text-muted">
                                        {profile.city || `N/A`}
                                    </small>
                                </p>
                                <p className="card-text">
                                    <small
                                        className={
                                            profile.status
                                                ? "text-success"
                                                : "text-danger"
                                        }
                                    >
                                        {profile.status ? `Active` : `Offline`}
                                    </small>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="status-form d-flex justify-content-center align-items-center">
                    <Form>
                        <div className="custom-control custom-switch d-flex justify-content-center">
                            <div className="checkbox">
                                <Field
                                    type="checkbox"
                                    className="custom-control-input"
                                    name="status"
                                    id="status-switch"
                                />
                                <label
                                    className="custom-control-label"
                                    htmlFor="status-switch"
                                >
                                    Status
                                </label>
                            </div>
                        </div>
                        <button className="btn btn-info">update</button>
                    </Form>
                </div>
            </div>
        </div>
    );
};

const ProfileFormik = withFormik({
    mapPropsToValues: ({ volunteerData }) => {
        let profile = volunteerData.profile;
        return {
            status: profile.status || false,
        };
    },
    handleSubmit(values, formikBag) {
        const { props, setSubmitting } = formikBag;

        httpRequest.post("/volunteer/update-user", values).then((responce) => {
            console.log(responce);
            props.updateProfile(responce.data);
            setSubmitting(false);
        });
    },
})(Profile);

let mapDispatchToProps = (dispatch) => {
    return {
        updateProfile: (updatedProfile) =>
            dispatch(fetchVolunteerSuccess(updatedProfile)),
    };
};

export default connect(null, mapDispatchToProps)(ProfileFormik);
