import { FETCH_USER } from "../actions/types";

export default function Reducer( state = null ,action){

    switch(action.type){
        case FETCH_USER:
            return action.payload || false ;
        default: return state;
    }
}