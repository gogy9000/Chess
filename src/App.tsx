import React, {useEffect, useState} from 'react';
import './App.css';
import {BordComponent} from "./components/BordComponent";
import { Board } from './models/Board';

function App() {

    const [board, setBoard]=useState(new Board())

    useEffect(()=>{
        restart()
    },[])

    function restart() {
        const newBoard=new Board()
        newBoard.initCells()
        setBoard(newBoard)
    }

  return (
    <div className="App">
      <BordComponent board={board} setBoard={setBoard}/>


    </div>
  );
}

export default App;
