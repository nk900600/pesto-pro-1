import {Datatype} from "./reducer";


export const HANDLE_ONCLICK = 'HANDLE_ONCLICK'
export const UPDATE_DATA = 'UPDATE_DATA'

interface HandleOnChangeAction {
    type: typeof HANDLE_ONCLICK
    payload: string
}

interface UpdateDataAction {
    type: typeof UPDATE_DATA
    payload: Datatype[]
}



export type CardTypesAction = HandleOnChangeAction | UpdateDataAction