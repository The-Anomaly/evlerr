import http from "../../Utils";
import { LOADING_USER, LOGIN_FAIL, LOGIN_SUCCESS } from "../Types";








export const login = ({ email, password }) => {
    let obj = { password, email }

    return dispatch => {
        dispatch({ type: LOADING_USER })
        return new Promise(async (resolve, reject) => {
            try {
                const res = await http.post("auth/securelogin", obj)
                const data = res.data
                // console.log('login data ', data)
                // await setUser(data);

                if (!data.twofa.active && data.user.isEmailVerified) {
                    dispatch({ type: LOGIN_SUCCESS, payload: data });
                }
                resolve(data);
            } catch (error) {
                console.log(error)
                dispatch({ type: LOGIN_FAIL, payload: error });
                reject(error);
            }
        });
    };
};


export const signup = (obj) => {
    // let obj = { password, email, password, firstName, lastName }

    return dispatch => {
        dispatch({ type: LOADING_USER })
        return new Promise(async (resolve, reject) => {
            try {
                const res = await http.post("auth/signup", obj)
                const data = res.data
                // await setUser(data);
                const notificationValue = await getNotificationValue()
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
