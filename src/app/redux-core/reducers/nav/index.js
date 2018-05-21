import {AppNavigator} from '../../../navigations';
import { LOGIN_SUCCESS,LOGOUT_SUCCESS } from '../../actions/auth';
import {NavigationActions } from 'react-navigation';


let initialState = AppNavigator.router.getStateForAction(NavigationActions.init());

const loggedOutAction = AppNavigator.router.getActionForPathAndParams("LoggedOut");
const loggedInAction = AppNavigator.router.getActionForPathAndParams("LoggedIn");

initialState = 
{
    stateForLoggedOut : AppNavigator.router.getStateForAction(loggedOutAction)
}


//navigation reducer
export default navReducer = (state = initialState,action) => {       
    switch(action.type){                        
        case LOGIN_SUCCESS: 
            return {
                stateForLoggedIn : AppNavigator.router.getStateForAction(loggedInAction)
            };
        case LOGOUT_SUCCESS:
            return {
                stateForLoggedOut : AppNavigator.router.getStateForAction(loggedOutAction)
            };
                
        default : 
            if("stateForLoggedOut" in state){
                return {
                    stateForLoggedOut : AppNavigator.router.getStateForAction(action,state.stateForLoggedOut)
                }
            }
            else if("stateForLoggedIn" in state){
                return {
                    stateForLoggedIn : AppNavigator.router.getStateForAction(action,state.stateForLoggedIn)
                }
            }

    }    
}



//https://github.com/reactjs/redux/issues/749