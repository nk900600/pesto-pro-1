import {Datatype} from "../redux/reducer";
import { FilterType } from "./type/FilterType";

export const filterUtility = (type:FilterType, list:Datatype[], value:string):Datatype[] =>{
    switch (type) {
        case 'ON_CLICK':
            return list.filter((val)=> val.name.toLowerCase().includes(value) || val.location.toLowerCase().includes(value))
        default:
            return list
    }
}
