import {
    LOGIN_SUCCESS, LOGIN_FAIL, LOADING_USER, LOGOUT
} from '../Types';

const INITIAL_STATE = {
    loadingUser: false,
    error: [],
    userData: '',
    isLogged: true
};

const AuthReducer = (state = INITIAL_STATE, { type, payload }) => {
    switch (type) {
        case LOADING_USER:
            return { ...state, loadingUser: true, error: [] };
        case LOGIN_SUCCESS:
            return { ...state, userData: payload };
        case LOGIN_FAIL:
            return { ...state, error: payload, userData: '' };
        case LOGOUT:
            localStorage.removeItem('refreshToken')
            sessionStorage.removeItem('accessToken')
            return { ...state, userData: '', isLogged: false }
        default:
            return state;
    }
};

export default AuthReducer