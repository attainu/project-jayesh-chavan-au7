import React from "react";
import Cookies from 'js-cookie'
import { Route, Redirect } from "react-router-dom";
import { WEB_URL } from "../../config";

export default function PrivateRoute(props) {

    const { component: Component,...rest } = props;
    const isAuth = !!Cookies.get('auth')

    return (
        <Route
            {...rest}
            render={(routeProps) => {
                return isAuth ? (
                    <Component {...rest} {...routeProps}/>
                ) : (
                    <Redirect to={WEB_URL.HOME}/>
                );
            }}
        />
    );
}
