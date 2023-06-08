import { type } from "os"

export interface TicTacToeInterface {
    TicTacToe: TypeTicTacToe[],
}


export type TypeTicTacToe = {
    id: number,
    visible: boolean,
    icon: string,
}



enum TicTacToeActionsTypes {
    REMOVE_ICON = "REMOVE_ICON",
    REMOVE_ALL_TTT ="REMOVE_ALL_TTT"
}

interface RemoveIcon {
    type: TicTacToeActionsTypes.REMOVE_ICON,
    payload: {t: TypeTicTacToe, crossOrCircle: boolean},
}

interface RemoveAllTTT {
    type: TicTacToeActionsTypes.REMOVE_ALL_TTT,
    payload: TypeTicTacToe,
}


type TicTacToeActions = RemoveIcon | RemoveAllTTT


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
    ],
}

export const Reducer = (state = defaultState, action: TicTacToeActions): TicTacToeInterface => {
    switch(action.type) {
        case TicTacToeActionsTypes.REMOVE_ALL_TTT:
            return{
                ...state, 
                TicTacToe: state.TicTacToe.map(ttt => (ttt = {...ttt, visible: ttt.visible = false, icon: ttt.icon = ""}))
            }
        case TicTacToeActionsTypes.REMOVE_ICON:
            return{
                ...state,                
                TicTacToe: state.TicTacToe.map(ttt=> (ttt.id === action.payload.t.id ? {...ttt, visible: ttt.visible = true, icon: ttt.icon = action.payload.crossOrCircle ? ttt.icon = "X" : ttt.icon = "O"} : ttt))
            }
        default:
            return{ ...state}
    }
}

export const removeIconAction = (t: TypeTicTacToe, crossOrCircle: boolean) => ({type: TicTacToeActionsTypes.REMOVE_ICON, payload: {t, crossOrCircle}})
export const removeAllTTTaction = (payload: TypeTicTacToe) => ({type: TicTacToeActionsTypes.REMOVE_ALL_TTT, payload})