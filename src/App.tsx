import React, { useEffect, useState } from 'react';
import './App.scss';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from './store/Reducers';
import { removeIconAction, TypeTicTacToe } from './store/Reducers/Reducer';
import CrossAndCircleSpace from './components/CrossAndCircleSpace/CrossAndCircleSpace';
import Top from './components/Top/Top';
import Modal from './components/Modal/Modal';

function App() {

  const [crossOrCircle, setCrossOrCircle] = useState<boolean>(true)
  const [visibleModal, setVisibleModal] = useState<boolean>(true)
  const [finalyModal, setFinalyModal] = useState<boolean>(false)
  const [resultCalculateWinner, setResultCalculateWinner] = useState<string>("")
  
  
  
  


  const { TicTacToe } = useTypedSelector(state => state.ticTacToe)

  const dispatch = useDispatch()


  const visibleIcon = (t: TypeTicTacToe, crossOrCircle: boolean) => {
    if (!t.visible) {
      dispatch(removeIconAction(t, crossOrCircle))
      setCrossOrCircle(!crossOrCircle)
    }
    return t
  }



useEffect(()=>{
  function calculateWinner(TicTacToe: TypeTicTacToe[]): string {
    let result = ""
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (TicTacToe[a].icon && TicTacToe[a].icon === TicTacToe[b].icon && TicTacToe[a].icon === TicTacToe[c].icon) {
        setFinalyModal(true)
        result = TicTacToe[a].icon
      }
    }
    if(TicTacToe.every((item) => item.visible)) {
      setFinalyModal(true)
      result = "friendship"
    }
    return result
  }
  const winner: string = calculateWinner(TicTacToe)  
  setResultCalculateWinner(winner)
}, [TicTacToe])

const removeModal = (): void => {
  setFinalyModal(false)
  setVisibleModal(true)
}
  
  
  return (
    <div className="App">
      <div className={visibleModal || finalyModal ? "modal" : "modalDown"}>
          <Modal 
            visibleModal={visibleModal} setVisibleModal={setVisibleModal} removeModal={removeModal}
            finalyModal={finalyModal} setFinalyModal={setFinalyModal} resultCalculateWinner={resultCalculateWinner} 
          />
      </div>
      <div>
        <Top crossOrCircle={crossOrCircle} setCrossOrCircle={setCrossOrCircle} />
        <CrossAndCircleSpace 
          crossOrCircle={crossOrCircle} setCrossOrCircle={setCrossOrCircle} 
          TicTacToe={TicTacToe} visibleIcon={visibleIcon}
        />
      </div>
    </div>
  );
}

export default App;
