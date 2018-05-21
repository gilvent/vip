import {put, take, call, fork} from 'redux-saga/effects';
import authAction, { LOGIN,LOGOUT, INITIAL_LOGIN } from '../actions/auth';
import { getInfo } from '../../services/api/private/view';
import { saveAPIKey, saveSecretKey, removeKeys, getAPIKey, getSecretKey } from '../../services/async-storage/keys';


function* InitialLogin(){
    let APIKey = yield call(getAPIKey);
    let Secret = yield call(getSecretKey);
    if(APIKey != false && Secret != false){
        yield put(authAction.Login({APIKey,Secret}))
    }else{
        yield put(authAction.LoginFail())
    }
}

function* Login(action){
    let { APIKey , Secret } = action.payload;
    
    let response = yield call(getInfo,APIKey,Secret);
    
    if(response.status != 200){
        yield put(authAction.LoginFail(response.statusText));
    }
    else if(response.data.success == 1){
        yield fork(saveAPIKey,APIKey);
        yield fork(saveSecretKey,Secret);
        yield put(authAction.LoginSuccess(response.data.return));
        
    }else{
        yield put(authAction.LoginFail(response.data.error));
    }
}

function* Logout(action){
    yield fork(removeKeys);
    yield put(authAction.LogoutSuccess());
}


function* watchInitialLogin(){
    while(true){
        var action = yield take(INITIAL_LOGIN);
        yield call(InitialLogin);
    }
}

function* watchLogin(){
    while(true){
        var action = yield take(LOGIN);
        yield call(Login,action)
    }
}

function* watchLogout(){
    while(true){
        var action = yield take(LOGOUT);
        yield call(Logout,action);
    }
}

export default function* authSagas() {
    yield [
        fork(watchLogin),
        fork(watchLogout),
        fork(watchInitialLogin)
    ];
}