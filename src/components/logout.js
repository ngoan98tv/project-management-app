import {Redirect} from "react-router-dom";
import {logout} from "../redux/actions/authActions";
import {connect} from "react-redux";
import React from 'react';

const LogOut = ({logout}) => {
    logout();
    return <Redirect to={'/login'}/>;
};

const mapDispatchToProps = (dispatch) => ({
    logout: () => {
        dispatch(logout());
    }
});

export default connect(null, mapDispatchToProps)(LogOut);