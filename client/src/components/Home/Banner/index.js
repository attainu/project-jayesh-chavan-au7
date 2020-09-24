import React from "react";
// import { useHistory } from 'react-router-dom'
import "./banner.scss";

const Banner = function () {

    // const history = useHistory()

    return (
        <div className="row banner">
            <div className="col-lg-6 banner__campaign">
                <div
                    id="carouselExampleIndicators"
                    className="carousel slide"
                    data-ride="carousel"
                >
                    <ol className="carousel-indicators">
                        <li
                            data-target="#carouselExampleIndicators"
                            data-slide-to="0"
                            className="active"
                        ></li>
                        <li
                            data-target="#carouselExampleIndicators"
                            data-slide-to="1"
                        ></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img
                                src={require("../../../utils/images/blood-donation1.jpg")}
                                className="d-block w-100"
                                alt="..."
                            />
                            <div className="carousel-caption d-none d-md-block">
                                <h5 className="display-5">Name of campaign</h5>
                                <p className="lead">Venue : City, State</p>
                                <button className="btn btn-primary">
                                    Know more
                                </button>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img
                                src={require("../../../utils/images/blood-donation3.jpg")}
                                className="d-block w-100"
                                alt="..."
                            />
                            <div className="carousel-caption d-none d-md-block">
                                <h5 className="display-5">Name of campaign</h5>
                                <p className="lead">Venue : City, State</p>
                                <button className="btn btn-primary">
                                    Know more
                                </button>
                            </div>
                        </div>
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
                <blockquote className='blockquote'>
                    <h1 className="display-3">
                        BRING A LIFE BACK TO POWER.
                    </h1>
                    <footer className='blockquote-footer'>
                        Make blood donation your responsibility
                    </footer>
                </blockquote>
                <div className="banner__navigation">
                    <button className="btn btn-primary">Find Doner Nearby</button>
                    <button className="btn btn-primary">Find Blood Bank Nearby</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;
