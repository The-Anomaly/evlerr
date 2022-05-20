import {
    LOGIN_SUCCESS, LOGIN_FAIL, LOADING_USER, LOGOUT, UPDATE_USER
} from '../Types';

const INITIAL_STATE = {
    loadingUser: false,
    error: [],
    userData: '',
    userInfo: '',
    isLogged: false
};

const AuthReducer = (state = INITIAL_STATE, { type, payload }) => {
    switch (type) {
        case LOADING_USER:
            return { ...state, loadingUser: true, error: [] };
        case LOGIN_SUCCESS:
            return { ...state, userData: payload, isLogged: true };
        case LOGIN_FAIL:
            return { ...state, error: payload, userData: '' };
        case UPDATE_USER:
            return { ...state, userInfo: payload };
        case LOGOUT:
            return { ...state, userData: '', userInfo: '', isLogged: false }
        default:
            return state;
    }
};

export default AuthReducer