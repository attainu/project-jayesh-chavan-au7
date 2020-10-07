import React from "react";
import _ from "lodash";
import { useHistory } from "react-router-dom";
import { WEB_URL } from "../../../config";
import "./banner.scss";

const Banner = function ({ camp }) {
    const history = useHistory();

    return (
        <div className="row banner">
            <div className="col-lg-6 banner__campaign">
                <div
                    id="carouselExampleIndicators"
                    className="carousel slide"
                    data-ride="carousel"
                >
                    <ol className="carousel-indicators">
                        {
                            _.map(camp, (campEvent, idx) =>
                            <li
                                data-target="#carouselExampleIndicators"
                                data-slide-to={idx}
                                className={idx === 0 ? "active" : ""}
                                key={idx}
                            ></li>
                        )}
                    </ol>
                    <div className="carousel-inner">
                        {_.map(camp, (campEvent, idx) =>
                            <div
                                className={
                                    idx === 0
                                        ? "carousel-item active"
                                        : "carousel-item"
                                }
                                key={idx}
                            >
                                <img
                                    src={campEvent.poster.firebaseUrl}
                                    className="d-block w-100"
                                    alt="..."
                                />
                                <div className="carousel-caption d-none d-md-block">
                                    <h5 className="display-5">
                                        {campEvent.organiser}
                                    </h5>
                                    <p className="lead">
                                        Venue : {campEvent.address}
                                    </p>
                                    <p className="lead">
                                        {campEvent.city}, {campEvent.state}
                                    </p>
                                    <p className="lead">
                                        Date : {campEvent.date}, Time : {campEvent.time}
                                    </p>
                                </div>
                            </div>
                        )}
                    </div>
                    <a
                        className="carousel-control-prev"
                        href="#carouselExampleIndicators"
                        role="button"
                        data-slide="prev"
                    >
                        <span
                            className="carousel-control-prev-icon"
                            aria-hidden="true"
                        ></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a
                        className="carousel-control-next"
                        href="#carouselExampleIndicators"
                        role="button"
                        data-slide="next"
                    >
                        <span
                            className="carousel-control-next-icon"
                            aria-hidden="true"
                        ></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>
            <div className="col-lg-6 banner__para">
                <blockquote className="blockquote">
                    <h1 className="display-3">BRING A LIFE BACK TO POWER.</h1>
                    <footer className="blockquote-footer">
                        Make blood donation your responsibility
                    </footer>
                </blockquote>
                <div className="banner__navigation">
                    <button
                        className="btn btn-primary"
                        onClick={() => history.push(WEB_URL.VolunteerSearch)}
                    >
                        Find Doner Nearby
                    </button>
                    <button
                        className="btn btn-primary"
                        onClick={() => history.push(WEB_URL.BloodBankSearch)}
                    >
                        Find Blood Bank Nearby
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Banner;
