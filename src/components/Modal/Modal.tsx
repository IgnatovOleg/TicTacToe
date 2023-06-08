import React from "react"
import { TicTacToeInterface } from "../../store/Reducers/Reducer"
import "./Modal.scss"

interface TypeModalProps {
    visibleModal: boolean,
    setVisibleModal: (visibleModal: boolean) => void,
    finalyModal: boolean,
    setFinalyModal: (finalyModal: boolean) => void,
    resultCalculateWinner: string,
    removeModal: () => void
}


const Modal: React.FC<TypeModalProps> = ({ visibleModal, setVisibleModal, finalyModal, setFinalyModal, resultCalculateWinner, removeModal}) => {



    return (
        <div className="container_modal">
            {visibleModal
                ? <div>
                    <h1 className={visibleModal ? "new_game_visible" : "new_game_none"}>New Game</h1>
                    <div className={visibleModal ? "btn_modal" : "btn_modal_none"}
                        onClick={() => setVisibleModal(!visibleModal)}>
                        <h1>GO!</h1>
                    </div>
                </div>
                : <div></div>
            }
            {finalyModal
                ? <div className="end_game">
                    <h1>Result:</h1>
                    <h1>{resultCalculateWinner} - WIN</h1>
                    <div className="btn_modal" onClick={() => removeModal()}>
                        <h1>Again?</h1>
                    </div>
                  </div>
                : <div></div>
            }
        </div>
    )
}

export default Modal;