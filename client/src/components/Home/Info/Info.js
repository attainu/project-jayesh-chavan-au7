import React from "react";
import "./info.scss";

const Info = function () {
    return (
        <div className="info">
            <hr/>
            <h1 className="display-4">Why to donate BLOOD ?</h1>
            <div className="row justify-content-center">
                <div className="col-sm-6 d-flex justify-content-center">
                    <img
                        src={require("../../../utils/images/blood_info1.jpg")}
                        alt="..."
                        className="d-block"
                    />
                </div>
                <div className="col-sm-6 d-flex align-items-center">
                    <p className="lead">
                        Mollit aliquip ex ad consequat incididunt et cupidatat
                        excepteur ad quis culpa cupidatat. Anim nulla fugiat non
                        irure. Non minim dolor voluptate amet excepteur nisi
                        quis esse fugiat ea mollit. Do enim eiusmod ipsum duis
                        ullamco. Velit deserunt ullamco laboris non
                        reprehenderit veniam consectetur veniam sint amet.
                        Incididunt irure enim deserunt velit nulla excepteur
                        excepteur officia voluptate occaecat. Irure tempor anim
                        deserunt exercitation consectetur.
                    </p>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-sm-6 d-flex align-items-center">
                <p className="lead">
                        Mollit aliquip ex ad consequat incididunt et cupidatat
                        excepteur ad quis culpa cupidatat. Anim nulla fugiat non
                        irure. Non minim dolor voluptate amet excepteur nisi
                        quis esse fugiat ea mollit. Do enim eiusmod ipsum duis
                        ullamco. Velit deserunt ullamco laboris non
                        reprehenderit veniam consectetur veniam sint amet.
                        Incididunt irure enim deserunt velit nulla excepteur
                        excepteur officia voluptate occaecat. Irure tempor anim
                        deserunt exercitation consectetur.
                    </p>
                </div>
                <div className="col-sm-6 d-flex justify-content-center">
                    <img
                        src={require("../../../utils/images/blood_info2.jpg")}
                        alt="..."
                        className="d-block"
                    />
                </div>
            </div>
        </div>
    );
};

export default Info;
