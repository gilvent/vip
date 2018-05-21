import axios from 'axios';

var tradeCurrency = [
    'btc_idr',
    'btg_idr',
    'bch_idr',
    'etc_idr',
    'ignis_idr',
    'ltc_idr',
    'nxt_idr',
    'ten_idr',
    'waves_idr',
    'str_idr',
    'xrp_idr',
    'xzc_idr'
];

async function getTicker(trade_key){
    const promise = await axios.get('https://vip.bitcoin.co.id/api/'+trade_key+'/ticker')
                                .then(function(res){
                                    return res.data.ticker;
                                });
     return promise;
}

export default async function (){
    var data = {}, promises = [];

    tradeCurrency.forEach(function(trade_key){
        promises.push(getTicker(trade_key));                
    });
    
    //warning bug: the results is assumed ordered correctly based on promises
    await axios.all(promises)
    .then(function(results){
        for(idx=0;idx<tradeCurrency.length;idx++){
            data[tradeCurrency[idx]] = results[idx];
        }
    })
    .catch(function(error){
        console.log(error)
    });
    
    return data;
}