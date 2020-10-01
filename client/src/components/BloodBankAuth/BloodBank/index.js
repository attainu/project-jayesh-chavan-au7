import React from "react";
import { withFormik, Form, Field } from "formik";
import { connect } from "react-redux";
import { fetchBloodBankSuccess } from '../../../redux/bloodBank/bloodBankAction'
import { httpRequest } from '../../../httpRequest'
import './bloodBank.scss'
const BloodBank = function ({bloodBankData}) {
    let bloodBank = bloodBankData.bloodBank;
    const bloodGroups = ["A+","A-","B+","B-","O+","O-","AB+","AB-"]

    return (          
        <div className="container d-flex justify-content-center align-items-center bloodBank">
            <div>
                <div className="card">
                    <div className="row no-gutters">
                        <div className="col-sm-6 ">
                            <img
                                src={
                                    require("../../../utils/images/blood_bank.jpg")
                                }
                                className="card-img"
                                alt="..."
                            />
                        </div>
                        <div className="col-sm-6">
                            <div className="card-body">
                                <h5 className="card-title">
                                    {bloodBank.name
                                        ? `${bloodBank.name}`
                                        : "N/A"}
                                </h5>
                                <p className="card-text">
                                    City :{" "}
                                    <small className="text-muted">
                                        {bloodBank.city || `N/A`}
                                    </small>
                                </p>
                                <p className="card-text">
                                    State :{" "}
                                    <small className="text-muted">
                                        {bloodBank.state || `N/A`}
                                    </small>
                                </p>
                                <p className="card-text">
                                    Email :{" "}
                                    <small className="text-muted">
                                        {bloodBank.email || `N/A`}
                                    </small>
                                </p>
                                <p className="card-text">
                                    Contact :{" "}
                                    <small className="text-muted">
                                        {bloodBank.mob_no || `N/A`}
                                    </small>
                                </p>
                                <p className="card-text">
                                    <small
                                        className={
                                            bloodBank.status
                                                ? "text-success"
                                                : "text-danger"
                                        }
                                    >
                                        {bloodBank.status ? `Active` : `Offline`}
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
                        <div className="d-flex justify-content-center">
                            <button className="btn btn-info my-3" type="submit">update</button>
                        </div>
                        <div className="stock mt-3">
                            <h1 className="h5 text-center">Update Blood Bank</h1>
                            {
                                bloodGroups.map((group,idx)=>(
                                    <div className="form-check form-check-inline" key={idx}>
                                        <Field className="form-check-input" type="checkbox" id={group} name={group}/>
                                        <label className="form-check-label" htmlFor={group}>{group}</label>
                                    </div>
                                ))
                            }
                            <div className="d-flex justify-content-center">
                            <button className="btn btn-info my-3" type="submit">Update Stock</button>
                        </div>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    )  
};

const bloodBankFormik = withFormik({
    mapPropsToValues: ({ bloodBankData }) => {
        let bloodBank = bloodBankData.bloodBank;
        let stock = bloodBank.availability
        return {
            status: bloodBank.status || false,
            "A+": stock ? stock["A+"] : false,
            "A-": stock ? stock["A-"] : false,
            "B+": stock ? stock["B+"] : false,
            "B-": stock ? stock["B-"] : false,
            "O+": stock ? stock["O+"] : false,
            "O-": stock ? stock["O-"] : false,
            "AB+": stock ? stock["AB+"] : false,
            "AB-": stock ? stock["AB-"] : false,
        };
    },
    handleSubmit(values, formikBag) {
        const { props, setSubmitting } = formikBag;

        let formatedValues = {
            status : values.status,
        }
        const { status, ...availability} = values
        formatedValues = {
            ...formatedValues,
            availability : {...availability}
        }

        httpRequest.post("/bloodbank/update-bank", formatedValues).then((responce) => {
            console.log(responce);
            props.updateBloodBank(responce.data);
            setSubmitting(false);
        });
    },
})(BloodBank);

let mapDispatchToProps = (dispatch) => {
    return {
        updateBloodBank: (updatedBloodBank) =>
            dispatch(fetchBloodBankSuccess(updatedBloodBank)),
    };
};

export default connect(null, mapDispatchToProps)(bloodBankFormik);
