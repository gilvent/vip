import { combineReducers } from 'redux';
import marketTicker from './marketTicker'; 

const marketReducer = combineReducers({
    marketTicker
});

export default marketReducer;