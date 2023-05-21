interface TicTacToeInterface {
    TicTacToe: TypeTicTacToe[]
}


export type TypeTicTacToe = {
    id: number,
    visible: boolean,
    icon: string,
}



enum TicTacToeActionsTypes {
    REMOVE_ICON = "REMOVE_ICON",
}

interface RemoveIcon {
    type: TicTacToeActionsTypes.REMOVE_ICON,
    payload: {t: TypeTicTacToe, crossOrCircle: boolean},
}


type TicTacToeActions = RemoveIcon


const defaultState: TicTacToeInterface = {
    TicTacToe: [
        {id: 1, visible: false, icon: ""},
        {id: 2, visible: false, icon: ""},
        {id: 3, visible: false, icon: ""},
        {id: 4, visible: false, icon: ""},
        {id: 5, visible: false, icon: ""},
        {id: 6, visible: false, icon: ""},
        {id: 7, visible: false, icon: ""},
        {id: 8, visible: false, icon: ""},
        {id: 9, visible: false, icon: ""},
    ]
}


export const Reducer = (state = defaultState, action: TicTacToeActions): TicTacToeInterface => {
    switch(action.type) {
        case TicTacToeActionsTypes.REMOVE_ICON:
            return{
                ...state,                
                TicTacToe: state.TicTacToe.map(ttt=> (ttt.id === action.payload.t.id ? {...ttt, visible: ttt.visible = true, icon: ttt.icon = action.payload.crossOrCircle ? ttt.icon = "x" : ttt.icon = "o"} : ttt))
            }
        default:
            return{ ...state}
    }
}

export const removeIconAction = (t: TypeTicTacToe, crossOrCircle: boolean) => ({type: TicTacToeActionsTypes.REMOVE_ICON, payload: {t, crossOrCircle}})