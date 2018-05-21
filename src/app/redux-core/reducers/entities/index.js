import { combineReducers } from "redux";
import auth from './auth';
import user from './user';
import market from './market';
const entitiesReducer = combineReducers({
    auth,
    user,
    market
});

export default entitiesReducer;
