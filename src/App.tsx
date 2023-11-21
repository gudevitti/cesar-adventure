import './App.css';
import useCharacter from './hooks/useCharacter/useCharacter';
import { PositionObject } from './components/Character/Character';
import useMaze from './hooks/useMaze/useMaze';
import { useRef, useState } from 'react';

const MOVE_SPEED = 1;
const MOVE_KEY = ['w', 'a', 's', 'd'];
const ATTACK_KEY = [' '];
const move: {
  [key: string]: (position: PositionObject) => PositionObject;
} = {
  w: ({ x, y }) => ({
    x: x - MOVE_SPEED,
    y,
  }),
  a: ({ x, y }) => ({
    x,
    y: y - MOVE_SPEED,
  }),
  s: ({ x, y }) => ({
    x: x + MOVE_SPEED,
    y,
  }),
  d: ({ x, y }) => ({
    x,
    y: y + MOVE_SPEED,
  }),
};

const ROWS = 20;
const COLUMNS = 20;

function App() {
  const {
    current: { start, boundaries, render: maze },
  } = useRef(useMaze({ rows: ROWS, columns: COLUMNS }));
  const {
    render: character,
    setPosition,
    setDirection,
    position,
    attack,
  } = useCharacter({ startingPosition: start, characterSize: ROWS });

  function handleMovement({ x, y }: PositionObject) {
    if (y > position.y) {
      setDirection('R');
    }
    if (y < position.y) {
      setDirection('L');
    }
    if (isMovable(x, y)) {
      setPosition({ x, y });
    }
  }

  function isMovable(x: number, y: number) {
    return boundaries[x][y][0] !== 'wall';
  }

  function handleKeyPress(event: React.KeyboardEvent<HTMLDivElement>) {
    if (MOVE_KEY.includes(event.key)) {
      handleMovement(move[event.key](position));
    }
    if (ATTACK_KEY.includes(event.key)) {
      attack();
    }
  }
  return (
    <>
      <div tabIndex={0} className="background" onKeyUp={handleKeyPress}>
        {character}
        {maze}
      </div>
    </>
  );
}

export default App;
