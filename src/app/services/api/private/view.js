import queryStringFromObject from '../../utilities/queryStringFromObject';
import { hmac_sha512, encrypt } from '../../utilities/encryption';
import axios from 'axios';

//view api
async function viewRequest(APIKey, Secret, params){
    var Sign = hmac_sha512(queryStringFromObject(params),Secret);
    return await axios({
        method: 'POST',
        url: 'https://vip.bitcoin.co.id/tapi',
        headers: {
            'Sign': Sign,
            'Key' : APIKey
        },
        data: queryStringFromObject(params),
    }).then(function(response){
        return response;
    }).catch(function(response){
        return response;
    });
}
export function getInfo(APIKey, Secret){
    var params = {
        method : 'getInfo',
        nonce : Date.now()
    }; 
    return viewRequest(APIKey,Secret,params);
}

export function getTransHistory(APIKey,Secret){
    var params = {
        method : 'transHistory',
        nonce : Date.now()
    };

    return viewRequest(APIKey, Secret, params);
}

export function getTradeHistory(APIKey,Secret){
    var params = {
        method : 'tradeHistory',
        nonce : Date.now()
    };

    return viewRequest(APIKey, Secret, params);
}



