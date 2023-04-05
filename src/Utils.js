/* eslint-disable linebreak-style */
import qs from 'qs';
import axios from "axios";
const apiRootUrl = 'https://evlerr-production.up.railway.app/api/v1'


const getUserToken = async () => {
    try {
        let aToken = sessionStorage.getItem("accessToken");
        let rToken = localStorage.getItem("refreshToken");
        let token = { access: aToken, refresh: rToken };
        return token;
    } catch (error) {
        return error;
    }
};

const setTokenIfExists = async options => {
    const token = await getUserToken();

    if (token.access === null) {
        // console.log('token not exist')
        return;
    }

    // console.log('token exists')
    options.headers = {
        'x-access-token': token.access,
        'x-refresh-token': token.refresh
    };

    // axios.interceptors.request.use((config) => {
    //     if (token.access) {
    //         console.log('appended tokens')
    //         config.headers['x-access-token'] = token.access
    //         config.headers['x-refresh-token'] = token.refresh
    //     }
    //     return config
    // }, (error) => {
    //     Promise.reject(error)
    // })
    // options.headers.Authorization = `Bearer ${token}`;
    // console.log('bearer token: ',token)
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
                            errors = error.response
                            break;
                        case 403:
                            message = "You are not authorized to access this resource.";
                            // navigate('Auth', { screen: 'Landing' })
                            // store.dispatch(signOut())
                            errors = error.response
                            break;
                        case 404:
                            message = "This resource could not be found. Please check the request and try again.";
                            errors = error.response
                            break;
                        case 409:
                            message = "This resource could not be found. Please check the request and try again.";
                            errors = error.response
                            break;
                        case 422:
                            message = "This resource could not be found. Please check the request and try again.";
                            errors = error.response
                            break;
                        case 500:
                            message = `An error occured on the server. Please try again later or contact support if error persists`;
                            errors = error.response
                            break;
                        case 503:
                            message = 'Server down, please contact support';
                            errors = error.response
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
    patch(url, data, isJson = true, options = {}) {
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

        return this.request(url, "PATCH", data, options);
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
    submissionFileUpload(url, data, isJson = true, options = {}) {
        // const options = {};
        if (!isJson) {
            options.headers = { "Content-Type": "multipart/form-data" };
            const formData = new FormData();
            data.forEach((value) =>
                formData.append('photo', value)
            );
            data = formData;
        }
        // console.log('Got here ', data, isJson, options)

        return this.request(url, "POST", data, options);
    },
    delete(url) {
        return this.request(url, "DELETE");
    }
};

export default http;
