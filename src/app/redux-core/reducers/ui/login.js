import {LOGIN, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT_SUCCESS, INITIAL_LOGIN} from '../../actions/auth';

const initialState ={
    isLoading : false,
    error : null
};

const loginUIReducer = (state = initialState, action) => {
    switch(action.type){
        case INITIAL_LOGIN:
        case LOGIN:
            return {...state, isLoading: true };
        case LOGIN_SUCCESS: 
            return {...state, isLoading: false };
        case LOGOUT_SUCCESS:
        case LOGIN_FAIL:
            return {...state, isLoading: false, error:action.payload  };
        default : return state;
    }
}

export default loginUIReducer;