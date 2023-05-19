import React from "react"
import "./Modal.scss"

interface TypeModalProps {
    visibleModal: boolean,
    setVisibleModal: (visibleModal: boolean) => void
}


const Modal: React.FC <TypeModalProps> = ({visibleModal, setVisibleModal}) => {



    return(
        <div className="container_modal">
            <h1>New Game</h1>
            <div className="btn_modal" onClick={() => setVisibleModal(!visibleModal)}><h1>GO!</h1></div>
        </div>
    )
}

export default Modal;