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
                                <li>Lorem ipsum dolor sit amet</li>
                                <li>Consectetur adipiscing elit</li>
                                <li>Integer molestie lorem at massa</li>
                                <li>Facilisis in pretium nisl aliquet</li>
                                <li>Nulla volutpat aliquam velit</li>
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
                                <li>Lorem ipsum dolor sit amet</li>
                                <li>Consectetur adipiscing elit</li>
                                <li>Integer molestie lorem at massa</li>
                                <li>Facilisis in pretium nisl aliquet</li>
                                <li>Nulla volutpat aliquam velit</li>
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
