import React, { useState } from "react";
import { connect } from 'react-redux'
import { fetchBloodBankSuccess } from '../../../redux/bloodBank/bloodBankAction'
import { httpRequest } from '../../../httpRequest'
import firebase from "../../../config/firebase";
import Modal from "react-modal";

Modal.setAppElement("#root");
const VerifyBloodBank = function (props) {
    let bloodBank = props.bloodBankData.bloodBank
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [otp, setOtp] = useState(new Array(6).fill(""));
    const [mob_no, setMobNo] = useState("");
    const [Time,setTime] = useState("10:00")
    const [register,setRegister] = useState(!!bloodBank.mob_no)

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
        var phoneNumber = "+91" + mob_no;
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

    const codeverifyBloodBankVerifyBloodBank = () => {
        var code = otp;
        window.confirmationResult
            .confirm(code)
            .then(function (result) {
                alert("Successfully registered");
                httpRequest.post('/bloodbank/update-bank', { mob_no })
                .then(responce => {
                    console.log(responce);
                    props.updatebloodBank(responce.data);
                    setRegister(true)
            })
                setModalIsOpen(false);
            })
            .catch(function (error) {
                alert(error.message);
                setModalIsOpen(false);
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
            width: "500px",
            height: "300px",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
        },
    };
    
    if(!register){
        return(
            <div>
                <h1 className="display-4 text-center">Register Your Mobile Number</h1>
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
                                onChange={(e) => setMobNo(e.target.value)}
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
                            <button className="btn btn-success" onClick={codeverifyBloodBankVerifyBloodBank}>
                                VerifyBloodBank
                            </button>
                            <p className="lead mt-4">Time remaning {Time}</p>
                        </div>
                    </div>
                </Modal>
            </div>
        )
    }else{
        return(
            <div className="container">
                <div id="recaptcha-container"></div>
                <h1 className="display-4 text-center">Your Registerd Mobile No</h1>
                <div className="container d-flex justify-content-center w-50">
                    <div>
                        <h1 className="h1">{`+91-${bloodBank.mob_no}`}</h1>
                        <button className="btn btn-info" onClick={() => setRegister(false)}>Update</button>
                    </div>
                </div>
            </div>
        )
    }
};

let mapDispatchToProps = dispatch => {
    return{
        updatebloodBank : updatedbloodBank => dispatch( fetchBloodBankSuccess(updatedbloodBank) )
    }
}

export default connect(null,mapDispatchToProps)(VerifyBloodBank);
