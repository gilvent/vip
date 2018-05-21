import { GET_TICKER_SUCCESS } from '../../../actions/market';

const initialState = {
    btc_idr : 0,
    btg_idr : 0,
    bch_idr : 0,
    etc_idr : 0,
    ignis_idr : 0,
    ltc_idr : 0,
    nxt_idr : 0,
    ten_idr : 0,
    waves_idr : 0,
    str_idr : 0,
    xrp_idr : 0,
    xzc_idr: 0
}

function marketTickerReducer(state = initialState, action){
    switch(action.type){
        case GET_TICKER_SUCCESS:
            let { payload } = action;
            return {...state,...payload}
        default : return state
    }
}

export default marketTickerReducer;