import React from "react";
import Cookies from 'js-cookie'
import { Route, Redirect } from "react-router-dom";
import { WEB_URL } from "../../config";
import VolunteerDashbaord from '../../containers/VolunteerDashboard'
import BloodBankDashboard from '../../containers/BloodBankDashboard'

export default function PrivateRoute(props) {

    const { component: Component,...rest } = props;
    const isAuth = !!Cookies.get('auth')
    const user = Cookies.get('logedInAs')

    return (
        <Route
            {...rest}
            render={(routeProps) => {
                return isAuth ? (
                    user === "bloodBank" ? <BloodBankDashboard {...rest} {...routeProps}/> :
                        <VolunteerDashbaord {...rest} {...routeProps}/>
                ) : (
                    <Redirect to={WEB_URL.HOME}/>
                );
            }}
        />
    );
}
