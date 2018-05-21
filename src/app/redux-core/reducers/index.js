import  {combineReducers}  from "redux";
import { reducer as formReducer} from 'redux-form';
import navReducer from './nav';
import entitiesReducer from './entities';
import uiReducer from './ui';

export default function getRootReducer(){
    return rootReducer = combineReducers({
        nav : navReducer,
        form : formReducer,
        ui : uiReducer,
        entities : entitiesReducer
    });
}