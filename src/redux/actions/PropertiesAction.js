
import http from "../../Utils";
import { DELETE_PROPERTY, GETTING_PROPERTIES, PROPERTIES_FAIL, PROPERTIES_SUCCESS, UPLOADING_PROPERTY, UPLOADING_PROPERTY_FAIL, UPLOADING_PROPERTY_SUCCESSFUL } from "../Types";



export const getProperties = (page = 1) => {
    return dispatch => {
        dispatch({ type: GETTING_PROPERTIES })
        return new Promise(async (resolve, reject) => {
            try {
                const res = await http.get(`user/properties?page=${page}`)
                const data = res.data
                console.log('currencies ', data)
                dispatch({ type: PROPERTIES_SUCCESS, payload: data });
                // storeCurrencies(data)
                resolve(data);
            } catch (error) {
                console.log('Currencies ', error)
                dispatch({ type: PROPERTIES_FAIL, payload: error });
                reject(error);
            }
        });
    };
}

export const getMembersProperties = (obj) => {
    return dispatch => {
        dispatch({ type: GETTING_PROPERTIES })
        return new Promise(async (resolve, reject) => {
            try {
                const res = await http.get('user/get-agent-properties', obj)
                const data = res.data
                console.log('properties ', data)
                // dispatch({ type: PROPERTIES_SUCCESS, payload: data });
                // storeCurrencies(data)
                resolve(data);
            } catch (error) {
                console.log('properties err ', error)
                // dispatch({ type: PROPERTIES_FAIL, payload: error });
                reject(error);
            }
        });
    };
}


export const uploadProperties = (obj) => {
    return dispatch => {
        dispatch({ type: UPLOADING_PROPERTY })
        return new Promise(async (resolve, reject) => {
            try {
                const res = await http.post("user/pproperty/new", obj)
                const data = res.data
                console.log('Upload response: ', data)
                dispatch({ type: UPLOADING_PROPERTY_SUCCESSFUL, payload: data });
                // storeCurrencies(data)
                resolve(data);
            } catch (error) {
                // console.log('Upload failed ', error)
                dispatch({ type: UPLOADING_PROPERTY_FAIL, payload: error });
                reject(error);
            }
        });
    };
}

export const editProperties = (propId, obj) => {
    return () => {
        // dispatch({ type: UPLOADING_PROPERTY })
        return new Promise(async (resolve, reject) => {
            try {
                const res = await http.patch(`/user/update-property/${propId}`, obj)
                const data = res.data
                console.log('Upload response: ', data)
                // dispatch({ type: UPLOADING_PROPERTY_SUCCESSFUL, payload: data });
                // storeCurrencies(data)
                resolve(data);
            } catch (error) {
                // console.log('Upload failed ', error)
                // dispatch({ type: UPLOADING_PROPERTY_FAIL, payload: error });
                reject(error);
            }
        });
    };
}


export const deleteProperty = (p_id) => {
    return dispatch => {
        return new Promise(async (resolve, reject) => {
            try {
                const res = await http.delete(`user/delete-property/${p_id}`)
                const data = res.data
                dispatch({type: DELETE_PROPERTY, payload: p_id})
                // console.log('deleteAction: ', data)
                resolve(data)
            } catch (error) {
                reject(error);
            }
        })
    }
}
