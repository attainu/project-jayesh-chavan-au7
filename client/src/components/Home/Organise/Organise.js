import React from "react";
import "./organise.scss";

const Organise = function () {
    return (
        <div className="organise">
            <hr />
            <div className="row">
                <div className="col-sm-6">
                    <div className="organise__content">
                        <h1 className="display-4">Organise A Blood Camp</h1>
                        <div className="organise__text">
                            <ul>
                                <li>If you want to organise</li>
                                <li>a blood camp to help your</li>
                                <li>community and to ssave lives</li>
                                <li>You can use our network to do so</li>
                                <li>We will advertise it on our Blood camp section</li>
                                <button className="btn btn-primary">
                                    Organise
                                </button>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="organise__content">
                        <h1 className="display-4">Help Us To Raise The Funds</h1>
                        <div className="organise__text">
                            <ul>
                                <li>Blood is not only needed for the priviledged </li>
                                <li>the poor of our society get the worse of it</li>
                                <li>They cannot afford to buy blood from blood banks</li>
                                <li>They have every right to live just like us</li>
                                <li>and its our moral duty towards them </li>
                                {/* <li>-- You can contribute in saving a life just by donating a few bucks</li> */}
                                <button className="btn btn-primary">
                                    Donate
                                </button>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Organise;
