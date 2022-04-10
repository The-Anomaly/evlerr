import { GETTING_PROPERTIES, PROPERTIES_FAIL, PROPERTIES_SUCCESS, } from "../Types"

const initialState = {
    properties: [],
    loadingProperties: false,
    propertiesError: '',
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

        case GETTING_PROPERTIES:
            return { ...state, loadingProperties: true }
        case PROPERTIES_SUCCESS:
            return { ...state, loadingProperties: false, properties: payload }
        case PROPERTIES_FAIL:
            return { ...state, loadingProperties: false, propertiesError: payload }
        default:
            return state
    }
}