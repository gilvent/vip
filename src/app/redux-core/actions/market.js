export const START_TICK_CYCLE = "MARKET/ Start Tick Cycle";
export const STOP_TICK_CYCLE = "MARKET/ Stop Tick Cycle";
export const GET_TICKER = "MARKET/ Get Ticker";
export const GET_TICKER_SUCCESS = "MARKET/ Get Ticker Success";
export const GET_TICKER_FAIL = "MARKET/ Get Ticker Fail";

function StartTickCycle(){
    return {
        type: START_TICK_CYCLE
    }
}

function StopTickCycle(){
    return {
        type: STOP_TICK_CYCLE
    }
}

function GetTicker(){
    return {
        type : GET_TICKER,
    }
}

function GetTickerSuccess(payload){
    return {
        type : GET_TICKER_SUCCESS,
        payload
    }
}

function GetTickerFail(payload){
    return {
        type : GET_TICKER_FAIL,
        payload
    }
}

export default marketAction ={
    GetTicker : GetTicker,
    GetTickerSuccess : GetTickerSuccess,
    GetTickerFail : GetTickerFail,
    StartTickCycle : StartTickCycle,
    StopTickCycle : StopTickCycle 
}