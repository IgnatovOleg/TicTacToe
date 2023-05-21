import React, {useState} from 'react';
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
  
  const {TicTacToe} = useTypedSelector(state => state.ticTacToe)
  
  const dispatch = useDispatch()


  const visibleIcon = (t: TypeTicTacToe, crossOrCircle: boolean) => {
    if(!t.visible) {
      dispatch(removeIconAction(t, crossOrCircle))
      setCrossOrCircle(!crossOrCircle)
    }
    return t
  }
  console.log(TicTacToe);
  

  

  return (
    <div className="App">
          <div className={visibleModal ? "modal" : "modalDown"}>
            <Modal visibleModal={visibleModal} setVisibleModal={setVisibleModal}/>
          </div>
          <div>
            <Top crossOrCircle={crossOrCircle} setCrossOrCircle={setCrossOrCircle}/>
            <CrossAndCircleSpace crossOrCircle={crossOrCircle} setCrossOrCircle={setCrossOrCircle} TicTacToe={TicTacToe} visibleIcon={visibleIcon}/>
          </div>
    </div>
  );
}

export default App;
