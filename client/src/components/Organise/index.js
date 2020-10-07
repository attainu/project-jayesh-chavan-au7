import React, { useState } from 'react'
import _ from "lodash";
import { withFormik, Field, Form } from 'formik'
import { connect } from 'react-redux'
import DatePick from '../shared/Datepicker'
import * as Yup from 'yup'
import { httpRequest } from '../../httpRequest'
import { fetchBloodBankCampSuccess } from '../../redux/organiserState/organiseStateAction'
import UploadPoster from '../../components/shared/posterUpload'

const Organise = function (props) {
    let { values, isSubmitting, touched, errors } = props;

    const [ReRender, setReRender] = useState(false);

    const cities = require("../../utils/json/cities.json")
    const cities_state = require("../../utils/json/cities-state.json");

    const selectState = (selectedCity) => {
        values.city = selectedCity;
        let obj = cities_state.filter((city) => selectedCity === city.name);
        values.state = obj[0].state;
        setReRender(!ReRender);
    };

    const sendNotification = (event) => {
        event.target.disabled = true
        console.log(props.bloodBankCamp);
        httpRequest.post('/organise/camp-notification', props.bloodBankCamp)
        .then(response => {
            console.log(response.data);
            if(response.data === 'No Volunteers'){
                alert("No volunteers in this city")
                return
            }else if (response.data.message[0] === 'Message sent successfully to NonDND numbers'){
                alert('Message sent successfully to volunteers')
                }
                return
            })
            .catch(error=> {
                if(error){
                    alert("Unable to send SMS")
                }
            })
    }

    if(Object.keys(props.bloodBankCamp).length){

        return(
            <div className="container ">
                <hr/>
                <h1 className="h2 text-center text-success">Successfully Registered</h1>
                <h1 className="h5 mx-2 text-center">You can upload your poster</h1>
                <div className="d-flex justify-content-center">
                    <div>
                        <UploadPoster fileName={props.bloodBankCamp._id} />
                        <hr/>
                        <h1 className="h4 mx-2 text-center">You can also send notification to our volunteers</h1>
                        <p className="text-muted text-center">click the button below</p>
                        <div className="d-flex justify-content-center">
                            <button className="btn btn-info" onClick={(e)=>sendNotification(e)}>Send Notification</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }else{
        return(
            <div className="container">
                <Form>
                <div className="form-row">
                        <div className="form-group col-md-4">
                            <label htmlFor="Organiser">Organiser : </label>
                            <Field
                                type="text"
                                className={
                                    touched.organiser && errors.organiser
                                        ? "form-control is-invalid"
                                        : "form-control"
                                }
                                id="Organiser"
                                name="organiser"
                            />
                            <small
                                className={
                                    touched.organiser && errors.organiser
                                        ? "form-text error-msg"
                                        : "hidden"
                                }
                            >
                                {touched.organiser && errors.organiser && errors.organiser}
                            </small>
    
                        </div>
                        <div className="form-group col-md-8">
                            <label htmlFor="venue">Venue :</label>
                            <Field
                                type="text"
                                className={
                                    touched.address && errors.address
                                        ? "form-control is-invalid"
                                        : "form-control"
                                }
                                id="venue"
                                name="address"
                            />
                            <small
                                className={
                                    touched.address && errors.address
                                        ? "form-text error-msg"
                                        : "hidden"
                                }
                            >
                                {touched.address && errors.address && errors.address}
                            </small>
                            <small className="form-text text-muted">
                                Enter address of event
                            </small>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-4">
                            <label htmlFor="City">City : </label>
                            <Field
                                className={
                                    touched.city && errors.city
                                        ? "form-control is-invalid"
                                        : "form-control"
                                }
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
                            <small
                                className={
                                    touched.city && errors.city
                                        ? "form-text error-msg"
                                        : "hidden"
                                }
                            >
                                {touched.city && errors.city && errors.city}
                            </small>
                        </div>
                        <div className="form-group col-md-4">
                            <label htmlFor="State">State : </label>
                            <Field
                                type="text"
                                className="form-control"
                                id="State"
                                name="state"
                                placeholder={values.state}
                                disabled={true}
                            />
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
                            <label htmlFor="Date" className="d-block">Date :</label>
                                <DatePick className="form-control d-block" name="date" id="Date" mindate={true}/>
                                <small
                                className={
                                    touched.date && errors.date
                                        ? "form-text error-msg"
                                        : "hidden"
                                }
                            >
                                {touched.date && errors.date && errors.date}
                            </small>
                                <small className="form-text text-muted">
                                    Enter Date
                                </small>
                        </div>
                        <div className="form-group col-md-4">
                            <label htmlFor="Time">Time : </label>
                            <Field
                                type="text"
                                className={
                                    touched.time && errors.time
                                        ? "form-control is-invalid"
                                        : "form-control"
                                }
                                id="Time"
                                name="time"
                                placeholder="10AM to 5PM"
                            />
                            <small
                                className={
                                    touched.time && errors.time
                                        ? "form-text error-msg"
                                        : "hidden"
                                }
                            >
                                {touched.time && errors.time && errors.time}
                            </small>
                            <small className="form-text text-muted">
                                    Enter Time Of event
                            </small>
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="btn btn-success"
                        disabled={isSubmitting}
                    >
                        Publish
                    </button>
                </Form>
            </div>
        )
    }
}

const OrganiseFormik = withFormik({
    mapPropsToValues : () => {
        return{
            email : "",
            organiser : "",
            address : "",
            city : "",
            state : "",
            time : "",
            date : ""
        }
    },
    validationSchema : Yup.object().shape({
        email : Yup.string().email().required(),
        organiser : Yup.string().required(),
        address : Yup.string().required(),
        city : Yup.string().required(),
        state : Yup.string().required(),
        time : Yup.string().required(),
        date : Yup.string().required()
    }),
    handleSubmit(values, formikBag){
        const {props, setSubmitting} = formikBag
        
        httpRequest.post('/organise/create', values)
            .then(responce => {
                console.log(responce);
                props.createCamp(responce.data)
                setSubmitting(false);
            })
    }
})(Organise)

const mapDispathcToProps = dispatch => {
    return{
        createCamp : campData => dispatch( fetchBloodBankCampSuccess(campData) )
    }
}

export default connect(null,mapDispathcToProps)(OrganiseFormik)