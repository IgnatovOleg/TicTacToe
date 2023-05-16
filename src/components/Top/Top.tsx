import React from "react"
import "./Top.scss"
import { RxCross1 } from 'react-icons/rx'
import { FaRegCircle } from 'react-icons/fa'

interface TypeProps {
    crossOrCircle: boolean
    setCrossOrCircle: (crossOrCircle: boolean) => void
}

const Top: React.FC <TypeProps> = ({crossOrCircle, setCrossOrCircle}) => {


    return (
        <div className="container_top">
            {crossOrCircle
            ? <h1>Ходит - <RxCross1 className="icon_top"/></h1>
            : <h1>Ходит - <FaRegCircle className="icon_top"/></h1>
            }
        </div>
    )
}

export default Top;