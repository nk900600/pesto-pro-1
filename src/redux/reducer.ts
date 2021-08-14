import {CardTypesAction, HANDLE_ONCLICK} from "./type";
import mockData1 from "../data/MockData1.json"
import mockData2 from "../data/MockData2.json"

export  type Datatype = {
    id:number;
    name:string;
    location:string;
}


export interface IInitialState {
    list: Datatype[],
    value: string
}
const data = [...mockData1,...mockData2.map(val => {
    return {
        id:val.id + 100,
        name:val.company,
        location:val.location
    }})]
export const InitialState: IInitialState = {
    list:data,
    value: ''
}

export const CardViewReducer = (state=InitialState, action:CardTypesAction): IInitialState=> {
    switch (action.type){
        case HANDLE_ONCLICK:
            return {...state , list: action.payload ? JSON.parse(JSON.stringify(state.list.filter((val)=> val.name.toLowerCase().includes(action.payload) || val.location.toLowerCase().includes(action.payload) ))) : data}
        default:
            return state
    }
}

