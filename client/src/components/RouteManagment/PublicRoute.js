import React from "react";
import Cookies from 'js-cookie'
import { Route, Redirect } from "react-router-dom";
import { WEB_URL } from "../../config";

export default function PublicRoute(props) {
    const { component: Component, ...rest  } = props;
    const isAuth = !!Cookies.get('auth')
    const user = Cookies.get('logedInAs')

    return (
        <Route
            {...rest}
            render={(routeProps) => {
                return isAuth ? (
                    user === "bloodBank" ? <Redirect to={WEB_URL.BLODD_BANK_DASHBOARD}/> :
                    <Redirect to={WEB_URL.VOLUNTEER_DASHBOARD} />
                ) : (
                    <Component {...rest} {...routeProps}/>
                );
            }}
        />
    );
}
