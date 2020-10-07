import React from "react";
import { httpRequest } from "../../httpRequest";
import Banner from "../../components/Home/Banner";
import Footer from "../../components/Home/Footer";
import Info from "../../components/Home/Info";
import Navbar from "../../components/Home/Navbar";
import Social from "../../components/Home/Social";
import Register from "../../components/Home/Register";
import './home.scss'
import Counter from "../../components/Home/Counter";

class Home extends React.Component {
    state = {
        loading: true,
        assetsData: null,
    };

    componentDidMount() {
        httpRequest.get('/assets')
            .then(response => {
                this.setState({
                    loading : false,
                    assetsData : response.data
                })
            })
    }

    render() {
        return (
            <div>
                {this.state.loading ? (
                    <div className="d-flex justify-content-center align-items-center loader">
                        <div>
                            <div className="d-block">
                                <i className="fas fa-hands-helping"></i>
                                <span>Blood_Line</span>
                            </div>
                            <div className="d-flex justify-content-center">
                                <div
                                    className="spinner-grow"
                                    style={{ width: "3rem", height: "3rem" }}
                                    role="status"
                                >
                                    <span className="sr-only">Loading...</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="container">
                        <Navbar />
                        <Banner camp={this.state.assetsData.campFirbaseUrl}/>
                        <Info />
                        <Register />
                        <Social />
                        <Counter counts={this.state.assetsData}/>
                        <Footer />
                    </div>
                )}
            </div>
        );
    }
}

export default Home;
