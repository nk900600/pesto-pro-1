import {CardTypesAction, HANDLE_ONCLICK, UPDATE_DATA} from "./type";
import mockData1 from "../data/MockData1.json"
import mockData2 from "../data/MockData2.json"
import {filterUtility} from "../util/Filter";

export  type Datatype = {
    Id:number;
    name:string;
    location:string;
}


export interface IInitialState {
    originalList: Datatype[],
    list: Datatype[],
    value: string
}

export const InitialState: IInitialState = {
    originalList:[],
    list:[],
    value: ''
}

export const CardViewReducer = (state=InitialState, action:CardTypesAction): IInitialState=> {
    switch (action.type){
        case HANDLE_ONCLICK:
            return {...state , list: action.payload ? filterUtility(action, state.originalList) : state.originalList}
        case UPDATE_DATA:
            return {...state , originalList: action.payload, list:action.payload}
        default:
            return state
    }
}

