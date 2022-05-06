import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import PropertiesReducer from './PropertiesReducer';

const appReducer = combineReducers({
    properties: PropertiesReducer,
    auth: AuthReducer
});

const rootReducer = (state, action) => {
    // when a logout action is dispatched it will reset redux state
    //   if (action.type === SIGNOUT_USER_SUCCESSFUL) {
    //     state = undefined;
    //   }

    return appReducer(state, action);
};

export default rootReducer;
