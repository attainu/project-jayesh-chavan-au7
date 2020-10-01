import React from "react";
import { withRouter } from "react-router-dom";
import NavbarBack from "../../components/shared/NavbarBack";
import BloodBankSignup from "../../components/BloodBankAuth/BloodBankSignup";

class BloodBankAuth extends React.Component {
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
                <BloodBankSignup history={this.props.history} />
            </div>
        );
    }
}

export default withRouter(BloodBankAuth);
