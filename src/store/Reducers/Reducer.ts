interface TicTacToeInterface {
    TicTacToe: TypeTicTacToe[]
}


export type TypeTicTacToe = {
    id: number,
    visible: boolean,
    icon: boolean,
}



enum TicTacToeActionsTypes {
    REMOVE_ICON = "REMOVE_ICON",
    REMOVE_VISIBLE = "REMOVE_VISIBLE",
}

interface RemoveIcon {
    type: TicTacToeActionsTypes.REMOVE_ICON,
    payload: {t: TypeTicTacToe, crossOrCircle: boolean},
}
interface RemoveVisible {
    type: TicTacToeActionsTypes.REMOVE_VISIBLE,
    payload: TypeTicTacToe
}

type TicTacToeActions = RemoveVisible | RemoveIcon


const defaultState: TicTacToeInterface = {
    TicTacToe: [
        {id: 1, visible: false, icon: false},
        {id: 2, visible: false, icon: false},
        {id: 3, visible: false, icon: false},
        {id: 4, visible: false, icon: false},
        {id: 5, visible: false, icon: false},
        {id: 6, visible: false, icon: false},
        {id: 7, visible: false, icon: false},
        {id: 8, visible: false, icon: false},
        {id: 9, visible: false, icon: false},
    ]
}


export const Reducer = (state = defaultState, action: TicTacToeActions): TicTacToeInterface => {
    switch(action.type) {
        case TicTacToeActionsTypes.REMOVE_ICON:
            return{
                ...state,
                TicTacToe: state.TicTacToe.map(ttt => (ttt.id === action.payload.t.id ? {...ttt, icon: ttt.icon = action.payload.crossOrCircle} : ttt))
            }
        case TicTacToeActionsTypes.REMOVE_VISIBLE:
            return{
                ...state, 
                TicTacToe: state.TicTacToe.map(ttt => (ttt.id === action.payload.id ? {...ttt, visible: ttt.visible = true} : ttt))
            }
        default:
            return{ ...state}
    }
}

export const removeIconAction = (t: TypeTicTacToe, crossOrCircle: boolean) => ({type: TicTacToeActionsTypes.REMOVE_ICON, payload: {t, crossOrCircle}})
export const removeVisibleAction = (payload: TypeTicTacToe) => ({type: TicTacToeActionsTypes.REMOVE_VISIBLE, payload})