import React from "react";
import { Switch } from "react-router-dom";
import _ from "lodash";
import routes from "./routes";
import PrivateRoute from "./components/RouteManagment/PrivateRoute";
import PublicRoute from "./components/RouteManagment/PublicRoute";

function App() {
    return (
        <div>
            <Switch>
                {_.map(routes, (route, idx) => {
                    return route.isProtected ? (
                        <PrivateRoute key={idx} {...route} />
                    ) : (
                        <PublicRoute key={idx} {...route} />
                    );
                })}
            </Switch>
        </div>
    );
}

export default App;
