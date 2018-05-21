import { LOGIN_SUCCESS } from "../../../actions/auth";
import { GET_USER_SUCCESS } from "../../../actions/user";

const initialState = {
    user_id: "",
    profile_picture: "",
    name: "",
    email: ""
}

function userInfoReducer (state = initialState, action){
    switch(action.type){
        case LOGIN_SUCCESS: 
        case GET_USER_SUCCESS:
            let data = action.payload
            return {
                user_id: data.user_id,
                profile_picture: data.profile_picture,
                name: data.name,
                email: data.email
            }
        default : return state;
    }

}

export default userInfoReducer;