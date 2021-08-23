import {Datatype} from "../redux/reducer";
import {CardTypesAction, HANDLE_ONCLICK} from "../redux/type";

export const filterUtility = (action:CardTypesAction, list:Datatype[]):Datatype[] =>{
    switch (action.type) {
        case HANDLE_ONCLICK:
            return list.filter((val)=> val.name.toLowerCase().includes(action.payload) || val.location.toLowerCase().includes(action.payload))
        default:
            return list
    }
}
