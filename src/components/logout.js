import Auth from "./auth";
import React from 'react';
import {withRouter} from "react-router-dom";

const LogOut = withRouter(({history}) => (
    <div>
    {Auth.signOut(() => history.push("/login"))}
    </div>
));

export default LogOut;