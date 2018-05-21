import { AsyncStorage } from 'react-native';

export async function saveAPIKey(key){
    try {
        await AsyncStorage.setItem('@KeyData:API', key);
        return true; 
    } catch (error) {
        return false;
    }
} 

export async function getAPIKey(){
    try{
        const apiKey = await AsyncStorage.getItem('@KeyData:API');
        if(apiKey != null){
            return apiKey;
        }else{
            return false;
        }
    } catch (error) {
        return false;
    }
}

export async function saveSecretKey(key){
    try {
        await AsyncStorage.setItem('@KeyData:Secret', key);
        return true; 
    } catch (error) {
        return false;
    }
} 

export async function getSecretKey(){
    try{
        const secret = await AsyncStorage.getItem('@KeyData:Secret');
        if(secret != null){
            return secret;
        }else{
            return false;
        }
    } catch (error) {
        return false;
    }
}

export async function removeKeys(){
    try{
        await AsyncStorage.removeItem('@KeyData:API');
        await AsyncStorage.removeItem('@KeyData:Secret')
    } catch (error){

    }
}