import React, {useState} from 'react';
import './App.scss';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from './store/Reducers';
import { removeIconAction, removeVisibleAction, TypeTicTacToe } from './store/Reducers/Reducer';
import CrossAndCircleSpace from './components/CrossAndCircleSpace/CrossAndCircleSpace';
import Top from './components/Top/Top';

function App() {

  const [crossOrCircle, setCrossOrCircle] = useState<boolean>(true)
  const {TicTacToe} = useTypedSelector(state => state.ticTacToe)
  
  const dispatch = useDispatch()


  const visibleIcon = (t: TypeTicTacToe, crossOrCircle: boolean) => {
    dispatch(removeVisibleAction(t))
    dispatch(removeIconAction(t, crossOrCircle))
    setCrossOrCircle(!crossOrCircle)
  }

  return (
    <div className="App">
      <Top crossOrCircle={crossOrCircle} setCrossOrCircle={setCrossOrCircle}/>
      <CrossAndCircleSpace crossOrCircle={crossOrCircle} setCrossOrCircle={setCrossOrCircle} TicTacToe={TicTacToe} visibleIcon={visibleIcon}/>

    </div>
  );
}

export default App;
