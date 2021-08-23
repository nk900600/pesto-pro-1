
import { ThunkAction } from 'redux-thunk';
import {CardTypesAction, HANDLE_ONCLICK, UPDATE_DATA} from "./type";
import {Datatype} from "./reducer";

export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    unknown,
    unknown,
    CardTypesAction
    >;




export const handleOnClick = (value: string): AppThunk => {
    return (dispatch) => dispatch({type:HANDLE_ONCLICK, payload:value})
};


export const UpdateList = (data:Datatype[]): AppThunk => {
    return (dispatch) => dispatch({type:UPDATE_DATA, payload:data})
};

