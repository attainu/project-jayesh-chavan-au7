import React from "react";
import "./footer.scss";

const Footer = function () {
    return (
        <div className="footer">
            <hr />
            <div className="row">
                <div className="">
                    <div>
                        <span className="footer__brand">
                            <i className="fas fa-hands-helping"></i>
                            <span>Blood_Line</span>
                        </span>
                        <div className="footer__content">
                            <blockquote className="blockquote text-center">
                                <p>
                                Blood Line is an attempt to connect people with similar blood groups
                                and encourage them to volunteer for blood donation in urgent need as
                                we all know that blood banks could run out of blood of some rare blood
                                groups. 
                                <br/>
                                <br/>
                                With blood line userss can connect with each other through SMS with 
                                genuine volenteers who are willing to donate on urgent notice and
                                users with rare blood groups can store there in prior for future emergencies.  
                                </p>
                                <footer className="blockquote-footer">
                                    Blood_Line @ 2020
                                </footer>
                            </blockquote>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
