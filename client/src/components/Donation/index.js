import React from "react";
import "./donation.scss";
const Donation = function () {
    return (
        <div className="donate">
            <h1 className="display-3 text-center">Help Us To Raise The Funds</h1>
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
                            As Buddha Said "Thousands of candles can be 
                            lighted fron a single candle, and the life of the
                            life of the candle will not be shortened". No act of 
                            kindness, no matter how small is ever wasted. <br/> So be 
                            the change you want to see in the world, your small donation
                            will go a long way and most importantly "Accha Lagta Hai".
                        </p>
                        <blockquote className="blockquote">
                            <p className="mb-0">
                            The simplest acts of kindness are by far more powerful then a 
                            thousand heads bowing in prayer.
                            </p>
                            <footer className="blockquote-footer">
                                Mahatma Gandhi{" "}
                                
                            </footer>
                        </blockquote>
                        <button className="btn btn-info">Donate</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Donation;
