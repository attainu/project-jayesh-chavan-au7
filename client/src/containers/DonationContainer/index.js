import React from "react";
import Donation from "../../components/Donation";
import Footer from "../../components/Home/Footer";
import NavbarBack from "../../components/shared/NavbarBack";

class DonateContainer extends React.Component {
    clickHandler = () => {
        window.history.back();
    };

    render() {
        return (
            <div className="container">
                <NavbarBack
                    clickHandler={this.clickHandler}
                    buttonText={
                        <i className="fas fa-arrow-left">
                            <span className="lead"> Back</span>
                        </i>
                    }
                />
                <Donation/>
                <Footer/>
            </div>
        );
    }
}

export default DonateContainer;
