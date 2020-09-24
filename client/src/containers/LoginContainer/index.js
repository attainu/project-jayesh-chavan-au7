import React from 'react'
import { withRouter } from 'react-router-dom'
import LoginFormik from '../../components/Login'

class LoginContainer extends React.Component{

    render(){
        return(
            <LoginFormik history={this.props.history}/>
        )
    }
}

export default withRouter(LoginContainer)