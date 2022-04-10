
import http from "../../Utils";
import { GETTING_PROPERTIES, PROPERTIES_FAIL, PROPERTIES_SUCCESS } from "../Types";



export const getProperties = () => {
    return dispatch => {
        dispatch({ type: GETTING_PROPERTIES })
        return new Promise(async (resolve, reject) => {
            try {
                const res = await http.get("user/properties")
                const data = res.data
                console.log('currencies ', data)
                dispatch({ type: PROPERTIES_SUCCESS, payload: data });
                // storeCurrencies(data)
                resolve(data);
            } catch (error) {
                console.log('Currencies ', error)
                dispatch({ type: PROPERTIES_FAIL, payload: error });
                // reject(error);
            }
        });
    };
}
