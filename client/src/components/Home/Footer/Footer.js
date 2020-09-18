import React from "react";
import "./footer.scss";

const Footer = function () {
    return (
        <div className="footer">
            <hr />
            <div className="row">
                <div className="col-sm-6">
                    <div>
                        <span className="footer__brand">
                            <i class="fas fa-hands-helping"></i>
                            <span>Blood_Line</span>
                        </span>
                        <div className="footer__content">
                            <blockquote className="blockquote text-center">
                                <p>
                                    Enim ea consectetur consequat ea culpa ipsum
                                    nisi dolor. Tempor culpa ullamco excepteur
                                    cillum esse fugiat non et non laborum culpa
                                    laboris labore in. Duis labore aliqua
                                    laboris sint amet proident eu esse sint
                                    velit do. Sint irure irure minim nisi ea
                                    sunt eu magna id incididunt do consequat
                                    sunt. Incididunt incididunt exercitation
                                    duis nisi ipsum consequat et Lorem nulla
                                    incididunt culpa deserunt irure. Voluptate
                                    mollit excepteur anim et amet.
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
