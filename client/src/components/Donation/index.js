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
                            Ut cillum incididunt veniam minim do sit. Deserunt
                            esse enim cupidatat voluptate nisi est occaecat
                            dolor nostrud exercitation esse. Nisi elit nulla non
                            anim et tempor eu eu pariatur elit id nisi elit
                            nisi. Eu laborum anim aute ut. Nostrud non do anim
                            fugiat cillum eiusmod quis.
                        </p>
                        <blockquote className="blockquote">
                            <p className="mb-0">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Integer posuere erat a ante.
                            </p>
                            <footer className="blockquote-footer">
                                Someone famous in{" "}
                                <cite title="Source Title">Source Title</cite>
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
