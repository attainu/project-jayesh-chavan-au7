import React from 'react'
import { withRouter } from 'react-router-dom'
import NavbarBack from '../../components/shared/NavbarBack'
import LoginFormikBloodBank from '../../components/LoginBloodBank'
import LoginFormikVolunteer from '../../components/LoginVolunteer'
import './login.scss'

class LoginContainer extends React.Component{

    clickHandler = () => {
        window.history.back();
    };

    render(){
        return(
            <div className="container login">
                <NavbarBack clickHandler={this.clickHandler} buttonText={
                        <i className="fas fa-arrow-left">
                            <span className="lead"> Back</span>
                        </i>
                    }/>
                <div className="row form">
                    <div className="col-md-6 d-flex align-items-center">
                        <div>
                            <h1 className="display-4 text-center">As Volunteer</h1>
                            <LoginFormikVolunteer history={this.props.history}/>
                        </div>
                    </div>
                    <div className="col-md-6 d-flex align-items-center">
                        <div>
                            <h1 className="display-4 text-center">As Blood Bank</h1>
                            <LoginFormikBloodBank history={this.props.history}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(LoginContainer)