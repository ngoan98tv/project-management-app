/* Auth Actions */
import api, { AuthAPI } from "../api";
import {authActionTypes} from "../types";

export const login = (email, password) => {
    return (dispatch, getState) => {
        dispatch({type: authActionTypes.LOGIN_WAITING});
        dispatch({
            type: authActionTypes.LOGIN_SUCCESS,
            token: 'this is a token'
        });
        // api(getState).post(AuthAPI.login, {
        //     email,
        //     password
        // }).then(response => {
        //     dispatch({
        //         type: authActionTypes.LOGIN_SUCCESS,
        //         token: response.token
        //     });
        // }).catch(error => {
        //     dispatch({
        //         type: authActionTypes.LOGIN_FAIL,
        //         error: error
        //     });
        // });
    };
};

export const logout = () => {
    return (dispatch, getState) => {
        dispatch({type: authActionTypes.LOGOUT_WAITING});
        dispatch({type: authActionTypes.LOGOUT_SUCCESS})
        // api(getState).post(AuthAPI.logout).then(response => {
        //     dispatch({type: authActionTypes.LOGOUT_SUCCESS});
        // }).catch(error => {
        //     dispatch({
        //         type: authActionTypes.LOGOUT_FAIL,
        //         error
        //     });
        // });
    };
}

export const  getProfile = () => {
    return (dispatch, getState) => {
        dispatch({type: authActionTypes.GET_PROFILE_WAITING});
        api(getState).get(AuthAPI.getProfile).then(response => {
            //TODO: dispatch response
        }).catch(error => {
            //TODO: dispatch error
        })
    };
}