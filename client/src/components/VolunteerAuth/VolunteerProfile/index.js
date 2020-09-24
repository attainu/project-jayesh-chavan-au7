import React from "react";
import "./volunteerProfile.scss";
const Profile = function () {
    return (
        <div className="container d-flex justify-content-center align-items-center profile ">
            <div className="card">
                <div className="row no-gutters">
                    <div className="col-sm-6 ">
                        <img src={require('../../../utils/images/Men_icon.jpg')} className="card-img" alt="..." />
                    </div>
                    <div className="col-sm-6">
                        <div className="card-body">
                            <h1 className="display-3">N/A</h1>
                            <h5 className="card-title">First_Name Last_Name</h5>
                            <p className="card-text">
                                Date of birth : <small className="text-muted">01 jan 1994</small>
                            </p>
                            <p className="card-text">
                                City : <small className="text-muted">City Name</small>
                            </p>
                            <p className="card-text">
                                <small className="text-success">
                                    Active
                                </small>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
