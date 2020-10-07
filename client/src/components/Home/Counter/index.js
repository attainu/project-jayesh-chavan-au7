import React from "react";
import Countup from "react-countup";
import handleViewport from "react-in-viewport";

const Counter = function (props) {
    const { inViewport, forwardedRef, counts } = props;

    return (
        <div
            className="container d-flex justify-content-center mx-3"
            ref={forwardedRef}
        >
            <div>
                <div className="d-flex justify-content-center">
                    <Countup
                        className="display-3 text-success"
                        end={inViewport ? counts.numberOfVolunteers : 0}
                    />
                </div>
                <p className="display-4 text-center">Volunteer Registered</p>
            </div>
            <div>
                <div className="d-flex justify-content-center">
                    <Countup
                        className="display-3 text-success"
                        end={inViewport ? counts.numberOfBloodBanks : 0}
                    />
                </div>
                <p className="display-4 text-center">Blood-Bank Registered</p>
            </div>
            <div>
                <div className="d-flex justify-content-center">
                    <Countup
                        className="display-3 text-success"
                        end={inViewport ? counts.numberOfDonations : 0}
                    />
                </div>
                <p className="display-4 text-center">Donations Received</p>
            </div>
        </div>
    );
};

export default handleViewport(Counter);
