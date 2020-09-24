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
                    A blood donation truly is a “gift of life” 
                    that a healthy individual can give to others 
                    in their community who are sick or injured. 
                    In one hour’s time, a person can donate 
                    one unit of blood that can be separated into 
                    four individual components that could help save multiple lives.
                    <br/>             
                    Blood is the most precious gift that anyone
                    can give to another person — the gift of life. 
                    A decision to donate your blood can save a life, 
                    or even several if your blood is separated into 
                    its components — red cells, platelets 
                    and plasma — which can be used individually for 
                    patients with specific conditions.
                    </p>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-sm-6 d-flex align-items-center">
                <p className="lead">
                There is a constant need for regular blood supply because 
                blood can be stored for only a limited time before use. 
                Regular blood donations by a sufficient number of healthy 
                people are needed to ensure that safe blood will be 
                available whenever and wherever it is needed.
                There’s no end to the benefits of donating blood for those who need it.
                <br/>
                <br/>
                <b>It turns out that donating blood doesn’t just benefit recipients. 
                There are health benefits for donors, too, on top of the 
                benefits that come from helping others.</b>
                <br/>
                <li>reduce stress</li>
                <li>improve your emotional well-being</li>
                <li>benefit your physical health</li>
                <li>help get rid of negative feelings</li>
                <li>provide a sense of belonging and reduce isolation</li>
                Research has found further evidence of the health benefits that come specifically from donating blood.
                </p>
                </div>
                <div className="col-sm-6 d-flex align-items-center ali justify-content-center">
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
