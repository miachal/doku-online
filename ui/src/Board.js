import React, { useState } from 'react';
import styled from 'styled-components';

const generateEmptyBoard = () => {
  const rows = [];
  for (let j = 0; j < 9; ++j) {
    rows.push(Array.from(Array(9), () => 1));
  }
  return rows;
};

const Board = styled.div`
  width: 50vw;
  height: 50vw;
  min-width: 450px;
  min-height: 450px;
  max-width: 70vh;
  max-height: 70vh;
  overflow: hidden;
  border: 12px solid black;
  border-radius: 12px;
  margin: 0 auto;
`;

const Overlay = styled.div`
  display: grid;
  grid-template: repeat(9, 1fr) / repeat(9, 1fr);
  position: absolute;
  top: 0;
  left: 0;
  background-color: orange;
`;

const Square = styled.div`
  width: 50px;
  height: 50px;
  margin: 1px;
  background-color: orange;
  &:hover {
    background-color: #999;
  }
`;

const BoardComponent = () => {
  const [board, setBoard] = useState(generateEmptyBoard);

  return (
    <Board>
      <Overlay>
        {board.map((row, i) =>
          row.map((column, j) => <Square key={`[${i}_${j}]`} />)
        )}
      </Overlay>
    </Board>
  );
};

export default BoardComponent;
