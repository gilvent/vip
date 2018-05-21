//action constants
export const INITIAL_LOGIN = "INITIAL_LOGIN";
export const LOGIN = "LOGIN";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";
export const LOGOUT = "LOGOUT";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";


//action creators
function InitialLogin(){
    return {
        type: INITIAL_LOGIN
    }
}
function Login(payload){
    return {
        type: LOGIN,
        payload
    }
}
function LoginSuccess(payload){
    return {
        type: LOGIN_SUCCESS,
        payload
    }
}
function LoginFail(payload){
    return {
        type: LOGIN_FAIL,
        payload
    }
}

function Logout(){
    return {
        type: LOGOUT
    }
}

function LogoutSuccess(payload){
    return {
        type: LOGOUT_SUCCESS,
        payload
    }
}

export default actions = {
    InitialLogin : InitialLogin,
    Login : Login,
    LoginSuccess : LoginSuccess,
    LoginFail : LoginFail,
    LogoutSuccess : LogoutSuccess,
    Logout : Logout
}