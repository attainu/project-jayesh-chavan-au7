import React from "react";
import { useHistory } from "react-router-dom";
import "./navbar.scss";

const Navbar = function () {
    const history = useHistory();

    return (
        <nav className="navbar navbar-light">
            <a className="navbar-brand" href="/">
                <i className="fas fa-hands-helping"></i>
                <span>Blood_Line</span>
            </a>
            <div className="navbar__btn">
                <button
                    className="btn btn-primary btn-nav"
                    onClick={() => history.push("/emergency")}
                    style={{width : "120px"}}
                >
                    Emergency
                </button>
                <button
                    className="btn btn-primary btn-nav"
                    onClick={() => history.push("/login")}
                    style={{width : "120px"}}
                >
                    Login
                </button>
                <button
                    className="btn btn-primary btn-nav"
                    onClick={() => history.push("/donate")}
                    style={{width : "120px"}}
                >
                    Donate
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
