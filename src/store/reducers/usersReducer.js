import { bindActionCreators } from "redux";

function UsersReducer(users=[],action){
    switch(action.type){

        case'GET_USERS':
        return[...action.value]

    }
    return users

}
export default UsersReducer;