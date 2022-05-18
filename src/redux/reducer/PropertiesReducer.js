import { GETTING_PROPERTIES, PROPERTIES_FAIL, PROPERTIES_SUCCESS, UPLOADING_PROPERTY, UPLOADING_PROPERTY_FAIL, UPLOADING_PROPERTY_SUCCESSFUL, } from "../Types"

const initialState = {
    properties: [],
    loadingProperties: false,
    propertiesError: '',
    uploadingProperty: false,
    uploadedProperty: [],
}

const PropertiesReducer = (state = initialState, { type, payload }) => {
    switch (type) {

        case GETTING_PROPERTIES:
            return { ...state, loadingProperties: true }
        case PROPERTIES_SUCCESS:
            return { ...state, loadingProperties: false, properties: payload }
        case PROPERTIES_FAIL:
            return { ...state, loadingProperties: false, propertiesError: payload }
        case UPLOADING_PROPERTY:
            return { ...state, uploadingProperty: true }
        case UPLOADING_PROPERTY_SUCCESSFUL:
            return { ...state, uploadingProperty: false, uploadedProperty: payload }
        case UPLOADING_PROPERTY_FAIL:
            return { ...state, uploadingProperty: false, propertiesError: payload }
        default:
            return state
    }
}

export default PropertiesReducer