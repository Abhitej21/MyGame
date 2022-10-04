import React from 'react'

const Message = ({winner,current}) => {
    
   const noMoves = current.board.every((ele)=>{
    return ele!==null;
   });
   
    return (
        <h2>
            {winner && `winner is ${winner}`}
            {!winner && !noMoves && `Next Player is ${current.isXNext?'X':'0'}`}
            {!winner && noMoves && `X and 0 are tied`}
        </h2>
    );

};

export default Message;