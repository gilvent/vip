import { LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT_SUCCESS, INITIAL_LOGIN } from '../../../actions/auth';

const initialState ={
    loggedIn : false,
    firstLogin : true,
};

const authReducer = (state = initialState, action) => {
    switch(action.type){
        case INITIAL_LOGIN:
            return {...state, firstLogin : false};
        case LOGIN_SUCCESS: 
            return {...state, loggedIn : true};
        case LOGOUT_SUCCESS:
        case LOGIN_FAIL:
            return {...state, loggedIn : false};
        default : return state;
    }
}

export default authReducer;