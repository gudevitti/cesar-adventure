import { useState } from 'react';
import Character, {
  PositionObject,
} from '../../components/Character/Character';

const ATTACK_ANIMATION_MS = 800;

interface UseCharacterProps {
  startingPosition: PositionObject;
  characterSize: number;
}

const useCharacter = ({
  startingPosition,
  characterSize,
}: UseCharacterProps) => {
  const [position, setPosition] = useState(startingPosition);
  const [direction, setDirection] = useState<'L' | 'R'>('R');
  const [attacking, setAttacking] = useState(false);

  function attack() {
    setAttacking(true);
    setTimeout(() => setAttacking(false), ATTACK_ANIMATION_MS);
  }

  const render = (
    <Character
      position={position}
      direction={direction}
      isAttacking={attacking}
      characterSize={characterSize}
    />
  );

  return { render, setPosition, setDirection, position, attack };
};

export default useCharacter;
