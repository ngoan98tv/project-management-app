import {Redirect, Route} from "react-router-dom";
import Auth from "./auth";
import React from "react";

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
        Auth.isAuthenticated === true
            ? <Component {...props} />
            : <Redirect to='/login' />
    )} />
);

export default PrivateRoute;