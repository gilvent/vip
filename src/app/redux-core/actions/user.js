export const GET_USER = "GET_USER";
export const GET_USER_SUCCESS = "GET_USER_SUCCESS";
export const GET_USER_FAIL = "GET_USER_FAIL";

function GetUser(){
    return {
        type: GET_USER
    }
}
function GetUserSuccess(payload){
    return {
        type: GET_USER_SUCCESS,
        payload
    }
}
function GetUserFail(payload){
    return {
        type: GET_USER_FAIL,
        payload
    }
}

export default userAction = {
    GetUser : GetUser,
    GetUserSuccess : GetUserSuccess,
    GetUserFail : GetUserFail
}