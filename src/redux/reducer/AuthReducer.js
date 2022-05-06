import {
    LOGIN_SUCCESS, LOGIN_FAIL, LOADING_USER,
} from '../Types';

const INITIAL_STATE = {
    loadingUser: false,
    error: [],
    userData: '',
    isLogged: true
};

export default (state = INITIAL_STATE, { type, payload }) => {
    switch (type) {
        case LOADING_USER:
            return { ...state, loadingUser: true, error: [] };
        case LOGIN_SUCCESS:
            return { ...state, userData: payload };
        case LOGIN_FAIL:
            return { ...state, error: payload, userData: '' };
        default:
            return state;
    }
};