import React from "react";
import { withRouter } from "react-router-dom";
import NavbarBack from "../../components/shared/NavbarBack";
import Footer from "../../components/Home/Footer"
import BloodBanks from "../../components/BloodBanks"

class BloodBankSearch extends React.Component {
    state = {
        city : ""
    };

    clickHandler = () => {
        window.history.back();
    };

    render() {
        console.log(this.state);
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
                <BloodBanks/>
                <Footer/>
            </div>
        );
    }
}

export default withRouter(BloodBankSearch);
