import React,{useState} from "react";
import Board from './components/Board'
import Message from './components/Message'
import History from './components/History'
import './styles/root.scss'
import { calculateWinner } from "./winner";
const App = () => {
  const NEW_GAME = [{board:Array(9).fill(null),isXNext:true},];

  const [history,setHistory] = useState(NEW_GAME); 
  const [currentMove, setCurrentMove] = useState(0);
  const current = history[currentMove];
  const {winner,winningSquares} = calculateWinner(current.board);
  
  
  const handleSquareClick = (position) => {
    if(current.board[position] || winner)
    return;
    setHistory(prev=>{
      const last = prev[prev.length-1];
      const newBoard =  last.board.map((square,pos)=>{
        if(pos===position){
        return last.isXNext?'X':'0';
        }
        return square;
      });

  return prev.concat({board: newBoard,isXNext: !last.isXNext});
    });
    setCurrentMove(prev=>prev+1);
  };
  
  const moveTo = (move) => {
    setCurrentMove(move);
  }

  const startNewGame = () => {
      setHistory(NEW_GAME);
      setCurrentMove(0);
  }
  return (
  <div className="app">
    <h1>TIC <span className="text-green">TAC</span> TOE</h1>
    <Message winner = {winner} current = {current}/>
    <Board board={current.board} handleSquareClick={handleSquareClick} winningSquares={winningSquares}/>
    <button type="button" className={`btn-reset ${winner?'active':''}`} onClick={startNewGame}>Start New Game</button>
    <h2>Current Game History</h2>
    <History history={history} currentMove={currentMove} moveTo={moveTo}/>
   <div className="bg-balls"/>
  </div>
);
  }
export default App;