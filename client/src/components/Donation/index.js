import React, { useState } from "react";
import StripeCheckout from "react-stripe-checkout";
import emailjs from "emailjs-com";
import { httpRequest } from "../../httpRequest";
import Loader from '../../components/shared/Loader'
import "./donation.scss";

const Donation = function () {

    const [status,setStatus] = useState(false)
    const [loading,setLoading] = useState(false)
    const [outcome,setOutcome] = useState(false)

    const product = {
        name: "Blood Bank Donation",
        price: 100
    }

    const sendEmail = (emailBody) => {
        var templateParams = {
            email_to : emailBody.receipt_email,
            receipt_url : emailBody.receipt_url,
            reply_to: "bloodlineversionone@gmail.com",
        };

        emailjs
            .send(
                process.env.REACT_APP_EMAILJS_SERVICE_ID,
                process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
                templateParams,
                process.env.REACT_APP_EMAILJS_USER_ID
            )
            .then(
                function (response) {
                    console.log("SUCCESS!", response.status, response.text);
                },
                function (error) {
                    console.log("FAILED...", error);
                }
            );
    };

    const makePayment = (token) => {
        const body = {
            token,
            product,
        };
        setLoading(true)
        httpRequest
            .post("/stripe/donate", body)
            .then((response) => {
                setLoading(false)
                setStatus(true)
                if(response.data.status === 'succeeded'){
                    setOutcome(true)
                    sendEmail(response.data)
                    return
                }
                alert(response.data.failure_message)
            })
            .catch((err) => {
                console.log(err);
                setStatus(true)
            });
    };


    if(loading){
        return(
            <Loader/>
        )
    }else if(status){
        return (
            <div>
                {
                    outcome ? (
                        <div style={{marginTop : "140px"}}>
                            <div className="d-flex justify-content-center">
                                <i class="fas fa-check-circle" style={{fontSize : "100px", color : "green"}}></i>
                            </div>
                            <h1 className="h2 text-center">Donation Complete</h1>
                            <p className="lead text-center">Please check your email</p>
                        </div>
                    ):
                    (
                        <div style={{marginTop : "140px"}}>
                            <div className="d-flex justify-content-center">
                                <i class="fa fa-window-close" style={{fontSize : "100px", color : "red"}}></i>
                            </div>
                            <h1 className="h2 text-center">Opps !! Something Went Wrong</h1>
                            <p className="lead text-center">try again after some time</p>                        
                        </div>
                    )
                }
            </div>
        )
    }else{
        return (
            <div className="donate">
                <h1 className="display-3 text-center">
                    Help Us To Raise The Funds
                </h1>
                <div className="row">
                    <div className="col-sm-6 d-flex align-items-center">
                        <img
                            src={require("../../utils/images/Donate_Box.jpg")}
                            alt="..."
                            className="d-block w-100"
                        />
                    </div>
                    <div className="col-sm-6 d-flex align-items-center">
                        <div className="content">
                            <p className="lead">
                                As Buddha Said "Thousands of candles can be lighted
                                fron a single candle, and the life of the life of
                                the candle will not be shortened". No act of
                                kindness, no matter how small is ever wasted. <br />{" "}
                                So be the change you want to see in the world, your
                                small donation will go a long way and most
                                importantly "Accha Lagta Hai".
                            </p>
                            <blockquote className="blockquote">
                                <p className="mb-0">
                                    The simplest acts of kindness are by far more
                                    powerful then a thousand heads bowing in prayer.
                                </p>
                                <footer className="blockquote-footer">
                                    Mahatma Gandhi{" "}
                                </footer>
                            </blockquote>
                            <StripeCheckout
                                stripeKey="pk_test_51HYyhZLkZFQwuTDV7DZfJkkDcN8W5t3n2jjIkd1GYzGBsQUp9KLNwcnHZ5Fnga6keDL2Oar4XoP1nWXFQSdYX7OT00vEqFYpRR"
                                token={makePayment}
                                currency="INR"
                                amount={product.price * 100}
                                name="Blood_Line"
                                description="help us to raise the funds"
                            >
                                <button className="btn btn-info">
                                    Donate {product.price} Rupees
                                </button>
                            </StripeCheckout>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default Donation;
