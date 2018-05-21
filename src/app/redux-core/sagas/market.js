import {put, take, call, fork} from 'redux-saga/effects';
import {delay} from 'redux-saga';
import marketAction,{ GET_TICKER, GET_TICKER_SUCCESS, GET_TICKER_FAIL, START_TICK_CYCLE, STOP_TICK_CYCLE } from '../actions/market';
import  getTicker  from '../../services/api/public/ticker';

let ticking = false;

function* StartTickCycle(){
    ticking = true;
    yield call(tick);
}
function* StopTickCycle(){
    ticking = false;
}

function* tick(){
    if(ticking == true){
        yield put(marketAction.GetTicker());
    }
}
function* GetTicker(action){
    let data = yield call(getTicker);
    if(data){
        let cleanData = {};
        for(var key in data){
            if(data[key]!=undefined){
                cleanData[key] = data[key];
            }
        }
        yield put(marketAction.GetTickerSuccess(cleanData));
    }
    else {
        yield put(marketAction.GetTickerFail());
    }
}

function* watchStartTickCycle(){
    while(true){
        yield take(START_TICK_CYCLE);
        yield call(StartTickCycle);
    }
}

function* watchStopTickCycle(){
    while(true){
        yield take(STOP_TICK_CYCLE);
        yield call(StopTickCycle);
    }
}

function* watchGetTicker(){
    while(true){
        var action = yield take(GET_TICKER);
        yield call(GetTicker,action)
    }
} 
function* watchGetTickerSuccess(){
    while(true){
        yield take(GET_TICKER_SUCCESS);
        yield call(delay,8000);
        yield call(tick)
    }
}
export default function* marketSagas() {
    yield [
        fork(watchGetTicker),
        fork(watchGetTickerSuccess),
        fork(watchStartTickCycle),
        fork(watchStopTickCycle)
    ];
}