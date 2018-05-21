import { createSelector } from 'reselect';

const getMarket = (state) => state.entities.market;
const getTicker = createSelector(getMarket,(market) => market.marketTicker);

const getPrices = createSelector(getTicker, filterPrices);


function filterPrices(ticker){
    let prices = {}
    for(var key in ticker){
        if(ticker.hasOwnProperty(key)){
            prices[key] = ticker[key].last;
        }
    }
    return prices;
}
export default authSelectors = {
    getMarket,
    getTicker,
    getPrices
};