import React from 'react'

const Message = ({winner,current}) => {
    
   const noMoves = current.board.every((ele)=>{
    return ele!==null;
   });
   
    return (
        <div className="status-message">
            {winner && <>Winner is <span className={winner==='X'?'text-green':'text-orange'} style={{fontWeight:'bold'}}>{winner}</span></>}
            {!winner && !noMoves && <>Next player is <span className={current.isXNext?'text-green':'text-orange'}>{current.isXNext?'X':'0'}</span></>}
            {!winner && noMoves && <><span className="text-green">X</span> and <span className="text-orange">0</span> are tied</>}
        </div>
    );

};

export default Message;