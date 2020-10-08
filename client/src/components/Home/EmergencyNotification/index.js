import React, { useState } from "react";
import { useHistory } from 'react-router-dom'
import Modal from "react-modal";
import NavbarBack from "../../shared/NavbarBack";
import firebase from "../../../config/firebase";
import { httpRequest } from '../../../httpRequest'

const EmergencyNotification = function () {
    const [city, setCity] = useState("");
    const [blood_group, setBloodGroup] = useState("");
    const [otp, setOtp] = useState(new Array(6).fill(""));
    const [contact, setContact] = useState("");
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [cityModal, setCityModal] = useState(false);
    const [register,setRegister] = useState(false)
    const [Time,setTime] = useState("10:00")

    const history = useHistory()


    const setUpReCaptcha = () => {
        window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
            "recaptcha-container",
            {
                size: "invisible",
                callback: function (response) {
                    // reCAPTCHA solved, allow signInWithPhoneNumber.
                    sendOTP();
                },
            }
        );
    };

    const sendOTP = () => {
        setUpReCaptcha();
        var phoneNumber = "+91" + contact;
        var appVerifier = window.recaptchaVerifier;
        firebase
            .auth()
            .signInWithPhoneNumber(phoneNumber, appVerifier)
            .then(function (confirmationResult) {
                window.confirmationResult = confirmationResult;
                setModalIsOpen(true);
            })
            .catch(function (error) {
                if(error.message === "reCAPTCHA has already been rendered in this element"){
                    return
                };
                alert(error.message)
                setModalIsOpen(false)
            });
        setModalIsOpen(true)
        window.start = setInterval(setCountdown,1000)
    };

    const codeverify = () => {
        var code = otp;
        window.confirmationResult
            .confirm(code)
            .then(function (result) {
                alert("Successfully registered");
                setRegister(true)
                setModalIsOpen(false);
                setCityModal(true)
            })
            .catch(function (error) {
                alert(error.message);
                setModalIsOpen(false);
                clearInterval(window.start)
            });
        setModalIsOpen(false);
        clearInterval(window.start)
        setCountdown("10.00")
    };

    let countdown = 10*60
    const setCountdown = () => {
        const min = Math.floor(countdown/60)
        let sec = countdown % 60
        sec = sec < 10 ? '0'+ sec : sec
        setTime(`${min}:${sec}`)
        countdown--
        if( countdown === 0){
            setModalIsOpen(false)
            clearInterval(window.start)
        }
    }

    const modalStyle = {
        content: {
            width: "700px",
            height: "300px",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
        },
    };

    const sendNotification = (event) => {
        event.target.disabled = true
        httpRequest.post('/emergency/notification',{ city, contact, blood_group })
        .then(response => {
            console.log(response.data);
            if(response.data === 'No Volunteers'){
                alert("No volunteers in this city")
                history.push('/')
                return
            }else if (response.data.message[0] === 'Message sent successfully to NonDND numbers'){
                alert('Message sent successfully to volunteers Wait for there response')
                }
                history.push('/')
                return
            })
            .catch(error=> {
                if(error){
                    alert("Unable to send SMS Try after some time")
                }
                history.push('/')
            })
    }


    if(!register){
        return (
            <div className="container">
                <NavbarBack
                        clickHandler={() => window.history.back()}
                        buttonText={
                            <i className="fas fa-arrow-left">
                                <span className="lead"> Back</span>
                            </i>
                        }
                    />
                <h1 className="display-3 text-center">Emergency Notification</h1>
                <p className="lead text-center">
                    if you are in urgent need of blood you can request our registerd
                    volunteers in your city for help by sending sms notification
                </p>
                <div className="container mobile-input d-flex w-50 justify-content-center">
                    <div>
                        <label htmlFor="mob">Enter your mobile no</label>
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="mob">+91</span>
                            </div>
                            <input
                                type="text"
                                className="form-control"
                                onChange={(e) => setContact(e.target.value)}
                            />
                        </div>
                        <button className="btn btn-info" onClick={sendOTP}>Send OTP</button>
                    </div>
                </div>
                <div id="recaptcha-container"></div>

                <Modal isOpen={modalIsOpen} style={modalStyle}>
                    <h1 className="display-4 text-center">Enter 6 digit OTP</h1>
                    <div className="container d-flex w-50 justify-content-center">
                        <div>
                            <div className="input-group mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    maxLength="6"
                                    onChange={(e) => setOtp(e.target.value)}
                                />
                            </div>
                            <button className="btn btn-success" onClick={codeverify}>
                                Verify
                            </button>
                            <p className="lead mt-4">Time remaning {Time}</p>
                        </div>
                    </div>
                </Modal>
            </div>
        );
    }else{
        return(
            <div className="container">
                <NavbarBack
                        clickHandler={() => window.history.back()}
                        buttonText={
                            <i className="fas fa-arrow-left">
                                <span className="lead"> Back</span>
                            </i>
                        }
                    />
                <div className="notification mt-5">
                    <h1 className="display-4 text-center text-success mb-3">Select the blood group you need</h1>
                    <div className="d-flex justify-content-center">
                        <select className="form-control"
                            style={{width:"150px"}}
                            type=""
                            id="Blood_Group"
                            name="blood_group"
                            onChange={e => setBloodGroup(e.target.value)}
                        >
                            <option value="A-">A-</option>
                            <option value="A+">A+</option>
                            <option value="B-">B-</option>
                            <option value="B+">B+</option>
                            <option value="O-">O-</option>
                            <option value="O+">O+</option>
                            <option value="AB-">AB-</option>
                            <option value="AB+">AB+</option>
                        </select>
                    </div>
                    <div className="d-flex justify-content-center mt-3">
                        <button className="btn btn-info" type="submit" onClick={(e) => sendNotification(e)} >Send Notifiacion</button>
                    </div>
                    <blockquote class="blockquote d-flex justify-content-center mt-3">
                        <div>
                            <p class="mb-0">“You never know where a blessing can come from.”</p>
                            <footer class="blockquote-footer">Teena Marie</footer>
                        </div>
                    </blockquote>
                </div>
                <Modal isOpen={cityModal} style={modalStyle}>
                        <h1 className="display-4 text-center text-danger">Geocoding not working !!</h1>
                        <p className="text-muted text-center">please enter city name manually</p>
                        <div className="input-group mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    onChange={(e) => setCity(e.target.value)}
                                />
                        </div>
                        <button className="btn btn-success" onClick={() => setCityModal(false)}>
                                Select your city
                        </button>
                </Modal>
            </div>
        )
    }
};

export default EmergencyNotification;
