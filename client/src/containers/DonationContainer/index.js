import React from "react";
import Donation from "../../components/Donation";
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
            </div>
        );
    }
}

export default DonateContainer;
