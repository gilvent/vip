import { LOGIN_SUCCESS } from "../../../actions/auth";
import { GET_USER_SUCCESS } from "../../../actions/user";

const initialState = {
    idr: {
        //balance : 0,
        //hold : 0
    },
    btc: {},
    bch: {},
    btg: {},
    bts: {},
    drk: {},
    doge: {},
    eth: {},
    etc: {},
    ignis: {},
    ltc: {},
    nxt: {},
    nem: {},
    str: {},
    ten: {},
    waves: {},
    xrp: {},
    xzc: {}
}

function normalizeState(state,balance,hold){
    for(var key in state){
        if(state.hasOwnProperty(key)){
            state[key] = {
                balance : balance[key],
                hold : hold[key]
            }
        };
    }
    return state;
}

function userBalanceReducer (state = initialState, action){
    switch(action.type){
        case LOGIN_SUCCESS:
        case GET_USER_SUCCESS: 
            let { balance } = action.payload;
            let { balance_hold } =action.payload;
            return normalizeState(state,balance,balance_hold);
        
        default : return state;
    }

}

export default userBalanceReducer;

