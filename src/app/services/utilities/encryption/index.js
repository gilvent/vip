import sha512 from 'crypto-js/sha512';
import hmacSHA512 from 'crypto-js/hmac-sha512';
import Base64 from 'crypto-js/enc-base64';
import Hex from 'crypto-js/enc-hex';


export function hmac_sha512(data,secret){
    const encrypt = hmacSHA512(data,secret).toString();
    return encrypt;
}
