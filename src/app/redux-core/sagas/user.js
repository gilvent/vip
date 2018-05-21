import {put, take, call, fork} from 'redux-saga/effects';
import userAction,{ GET_USER } from '../actions/user';
import { getInfo } from '../../services/api/private/view';
import { getAPIKey, getSecretKey } from '../../services/async-storage/keys';

function* GetUser(action){
    let APIKey = yield call(getAPIKey);
    let Secret = yield call(getSecretKey);
    
    let response = yield call(getInfo,APIKey,Secret);
    
    if(response.status != 200){
        yield put(userAction.GetUserFail(response.statusText));
    }
    else if(response.data.success == 1){
        yield put(userAction.GetUserSuccess(response.data.return));
        
    }else{
        yield put(userAction.GetUserFail(response.data.error));
    }
}

function* watchGetUser(){
    while(true){
        var action = yield take(GET_USER);
        yield call(GetUser,action)
    }
}

export default function* userSagas() {
    yield [
        fork(watchGetUser)
    ];
}