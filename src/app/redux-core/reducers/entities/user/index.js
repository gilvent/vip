import { combineReducers } from "redux";
import userInfo from './userInfo';
import userBalance from './userBalance'

const userReducer = combineReducers({
    userInfo,
    userBalance
});

export default userReducer;