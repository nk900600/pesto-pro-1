

export const HANDLE_ONCLICK = 'HANDLE_ONCLICK'

interface HandleOnChangeAction {
    type: typeof HANDLE_ONCLICK
    payload: string
}



export type CardTypesAction = HandleOnChangeAction