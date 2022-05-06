/* eslint-disable linebreak-style */
// import { AsyncStorage } from 'react-native';
import qs from 'qs';

import axios from "axios";


// const apiRootUrl = isProduction ? "https://api.obiex.finance/v1" : "https://obiex-cex-api.herokuapp.com/v1/";
const apiRootUrl = 'https://evlerr-api.herokuapp.com/api/v1/'

// import store from './redux/Index';




const getUserToken = async () => {
    try {
        let token = localStorage.getItem("token");
        return token;
    } catch (error) {
        return error;
    }
};

const setTokenIfExists = async options => {
    const token = await getUserToken();

    if (token === null) {
        return;
    }

    if (!options.headers) {
        options.headers = {};
    }

    options.headers.Authorization = `Bearer ${token}`;
    // options.headers.Authorization = `Bearer ${tokenOne}`;

};

const http = {
    async request(url, method, data, options = {}) {
        // const obj = { headers : { Authorization: `Bearer ${tokenOne}`}}
        return new Promise(async (resolve, reject) => {
            await setTokenIfExists(options);
            try {

                const response = await axios({
                    method,
                    url,
                    baseURL: apiRootUrl,
                    data,
                    paramsSerializer: function (params) {
                        return qs.stringify(params, { arrayFormat: 'repeat' })
                    },
                    // ...obj,
                    ...options
                });
                resolve(response.data);
            } catch (error) {
                let message = '';
                let errors = [];
                if (error.response) {
                    // The request was made and the server responded with a status code
                    // that falls out of the range of 2xx
                    switch (error.response.status) {
                        case 400:
                            errors = error.response?.data?.errors;
                            break;
                        case 401:
                            message = "You are not authorized to access this resource.";
                            // navigate('Auth', { screen: 'Landing' })
                            // store.dispatch(signOut())
                            break;
                        case 403:
                            message = "You are not authorized to access this resource.";
                            // navigate('Auth', { screen: 'Landing' })
                            // store.dispatch(signOut())
                            break;
                        case 404:
                            message = "This resource could not be found. Please check the request and try again.";
                            break;
                        case 500:
                            message = `An error occured on the server. Please try again later or contact support if error persists`;
                            break;
                        case 503:
                            message = 'Server down, please contact support';
                            break;
                        default:
                            message = "An unexpected error has occurred. Please, try again.";
                            break;
                    }
                    // console.log(error.response.data);
                    // console.log(error.response.status);
                    // console.log(error.response.headers);
                } else if (error.request) {
                    message = "No response from server. Please try again later or contact support if error persists"
                    // The request was made but no response was received
                    // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                    // http.ClientRequest in node.js
                    console.log(error.request);
                } else {
                    message = "An unexpected error occured. Please, check your internet and try again.";
                    // Something happened in setting up the request that triggered an Error
                    console.log('Error', error.message);
                }
                const arr = [message, errors];
                reject(arr);
            }
        });
    },
    get(url, params = {}) {
        const options = { params };
        return this.request(url, "GET", null, options);
    },
    post(url, data, isJson = true, options = {}) {
        // const options = {};
        if (!isJson) {
            options.headers = { "Content-Type": "multipart/form-data" };
            const formData = new FormData();
            Object.entries(data).forEach(([key, value]) =>
                formData.append(key, value)
            );
            data = formData;
        }
        // console.log('Got here ', data, isJson, options)

        return this.request(url, "POST", data, options);
    },
    put(url, data, isJson = true) {
        const options = {};

        if (!isJson) {
            options.headers = { "Content-Type": "multipart/form-data" };
            const formData = new FormData();
            Object.entries(data).forEach(([key, value]) =>
                formData.append(key, value)
            );
            data = formData;
        }
        return this.request(url, "PUT", data, options);
    },
    uploadFile(url, file, options = {}) {
        return this.post(url, { file, ...options }, false);
    },
    delete(url) {
        return this.request(url, "DELETE");
    }
};

export default http;
