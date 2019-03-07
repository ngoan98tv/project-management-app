/* Auth Reducer */
import { authActionTypes } from "../types";
import States from "../initialStates";

export default (state = States.auth, action) => {
    switch (action.type) {
        case authActionTypes.LOGIN_FAIL:
            return {...state, status: authActionTypes.LOGIN_FAIL};
        case authActionTypes.LOGIN_SUCCESS:
            return {
                isAuthenticated: true,
                token: action.token,
                status: authActionTypes.LOGIN_SUCCESS
            };
        case authActionTypes.LOGIN_WAITING:
            return {...state, status: authActionTypes.LOGIN_WAITING};
        case authActionTypes.LOGOUT_FAIL:
            return {...state, status: authActionTypes.LOGOUT_FAIL};
        case authActionTypes.LOGOUT_SUCCESS:
            return {
                isAuthenticated: false,
                token: '',
                status: authActionTypes.LOGOUT_SUCCESS};
        case authActionTypes.LOGOUT_WAITING:
            return {...state, status: authActionTypes.LOGOUT_WAITING};
        default: return state;
    }
}