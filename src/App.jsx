import React,{useState} from "react";
import Board from './components/Board'
import History from './components/History'
import './styles/root.scss'
import { calculateWinner } from "./winner";
const App = () => {

  const [history,setHistory] = useState([
    { board: Array(9).fill(null),isXNext: true},]); 
  const [currentMove, setCurrentMove] = useState(0);
  const current = history[currentMove];
  const winner = calculateWinner(current.board);
  
  const message = winner?`Winner is ${winner}`:`Next Player is ${current.isXNext?'X':'0'}`;
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
    //setIsNext(prev=>!prev);
    setCurrentMove(prev=>prev+1);
  };
  
  const moveTo = (move) => {
    setCurrentMove(move);
  }

  return (
  <div className="app">
    <h1>TIC TAC TOE</h1>
    <h2>{message}</h2>
    <Board board={current.board} handleSquareClick={handleSquareClick}/>
    <History history={history} currentMove={currentMove} moveTo={moveTo}/>
  </div>
);
  }
export default App;