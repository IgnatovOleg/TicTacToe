import React from 'react'
import "./CrossAndCircleSpace.scss"
import { RxCross1 } from 'react-icons/rx'
import { FaRegCircle } from 'react-icons/fa'
import { TypeTicTacToe } from '../../store/Reducers/Reducer'



interface TypeProps {
    TicTacToe: TypeTicTacToe[],
    crossOrCircle: boolean,
    setCrossOrCircle: (crossOrCircle: boolean) => void,
    visibleIcon: (t: TypeTicTacToe, crossOrCircle: boolean) => void,
}


const CrossAndCircleSpace: React.FC <TypeProps> = ({crossOrCircle, setCrossOrCircle, TicTacToe, visibleIcon}) => {


    return (
        <div className='container_ttt'>
            {TicTacToe.map(t => 
                <div onClick={() => visibleIcon(t, crossOrCircle)} key={t.id}>
                    {t.visible
                    ? <div className="box">
                        {t.icon === "x"
                        ? <RxCross1 className='icon'/>
                        : <FaRegCircle className='icon'/>
                        }
                      </div>
                    : <div className="box"></div>
                    }
                </div>    
            )}
        </div>
    )
}

export default CrossAndCircleSpace;
