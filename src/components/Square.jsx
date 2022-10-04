import React from 'react'
const Square = ({value,onClick,isWinningSquare}) => {
    return (
        <button type="button" onClick={onClick} className="square" style={{fontWeight: isWinningSquare?'bold':'normal'}}>{value}</button>
    );
};

export default Square;