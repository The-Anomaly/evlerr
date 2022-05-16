import http from "../../Utils";
import { LOADING_USER, LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT } from "../Types";



export const login = ({ email, password }) => {
    let obj = { password, email }

    return dispatch => {
        dispatch({ type: LOADING_USER })
        return new Promise(async (resolve, reject) => {
            try {
                const res = await http.post("auth/createSession", obj)
                const data = res.data

                let { accessToken, refreshToken } = data;
                sessionStorage.setItem("accessToken", accessToken);
                localStorage.setItem("refreshToken", refreshToken);
                // await setUser(data);
                
                // if (!data.twofa.active && data.user.isEmailVerified) {
                dispatch({ type: LOGIN_SUCCESS, payload: data });
                console.log('login data ', data)
                // }
                resolve(data);
            } catch (error) {
                console.log(error)
                dispatch({ type: LOGIN_FAIL, payload: error });
                reject(error);
            }
        });
    };
};

export const logout = () => {
    return dispatch => {
        dispatch({ type: LOGOUT })
        localStorage.removeItem('refreshToken')
        sessionStorage.removeItem('accessToken')
        console.log('logged out')
    }
}

export const signup = (obj) => {
    // let obj = { password, email, password, firstName, lastName }

    return dispatch => {
        dispatch({ type: LOADING_USER })
        return new Promise(async (resolve, reject) => {
            try {
                const res = await http.post("auth/create-user", obj)
                const data = res.data
                // await setUser(data);
                // const notificationValue = await getNotificationValue()
                dispatch({ type: LOGIN_SUCCESS, payload: data });
                // loadResources(dispatch, data)
                resolve(data);
            } catch (error) {
                console.log(error)
                dispatch({ type: LOGIN_FAIL, payload: error });
                reject(error);
            }
        });
    };
};


export const forgotPassword = (obj) => {
    return dispatch => {
        dispatch({ type: LOADING_USER })
        return new Promise(async (resolve, reject) => {
            try {
                const res = await http.post('auth/forgot-password', obj)
                const data = res.data
                dispatch({ type: LOGIN_SUCCESS, payload: data });
                // loadResources(dispatch, data)
                resolve(data);
            } catch (error) {
                console.log(error)
                dispatch({ type: LOGIN_FAIL, payload: error });
                reject(error);
            }
        })
    }
}


export const recoverPassword = (obj) => {
    return dispatch => {
        dispatch({ type: LOADING_USER })
        return new Promise(async (resolve, reject) => {
            try {
                const res = await http.post('auth/reset-password', obj)
                const data = res.data
                dispatch({ type: LOGIN_SUCCESS, payload: data });
                // loadResources(dispatch, data)
                resolve(data);
            } catch (error) {
                console.log(error)
                dispatch({ type: LOGIN_FAIL, payload: error });
                reject(error);
            }
        })
    }
}
