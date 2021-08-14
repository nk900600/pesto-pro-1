
import { ThunkAction } from 'redux-thunk';
import {CardTypesAction, HANDLE_ONCLICK} from "./type";

export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    unknown,
    unknown,
    CardTypesAction
    >;




export const handleOnClick = (value: string): AppThunk => {
    return (dispatch) => dispatch({type:HANDLE_ONCLICK, payload:value})
};

