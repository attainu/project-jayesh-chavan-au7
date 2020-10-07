import React from "react";
import { withRouter } from "react-router-dom";
import NavbarBack from "../../components/shared/NavbarBack";
import VolunteerSignup from "../../components/VolunteerAuth/VolunteerSignup";

class VolunteerAuth extends React.Component {
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
                <VolunteerSignup history={this.props.history} />
            </div>
        );
    }
}

export default withRouter(VolunteerAuth);
