import { combineReducers } from 'redux';
import PropertiesReducer from './PropertiesReducer';

const appReducer = combineReducers({
    properties: PropertiesReducer
});

const rootReducer = (state, action) => {
    // when a logout action is dispatched it will reset redux state
    //   if (action.type === SIGNOUT_USER_SUCCESSFUL) {
    //     state = undefined;
    //   }

    return appReducer(state, action);
};

export default rootReducer;
