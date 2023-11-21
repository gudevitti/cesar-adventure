import { useEffect, useState } from 'react';
import './Character.css';

interface CharacterProps {
  position: PositionObject;
  direction: 'L' | 'R';
  isAttacking: boolean;
  characterSize: number;
}

export type PositionObject = {
  x: number;
  y: number;
};

const directionStyle: { [key: string]: string } = {
  R: 'scaleX(1)',
  L: 'scaleX(-1)',
};

const Character = ({
  position,
  direction,
  isAttacking,
  characterSize,
}: CharacterProps) => {
  const [attackStyle, setAttackStyle] = useState('');

  useEffect(() => {
    const v = new Date().getTime();
    setAttackStyle(`url(/src/assets/skeleton-attack.gif?ver=${v})`);
  }, [isAttacking]);

  const backgroundAttack = isAttacking ? attackStyle : '';
  const characterSizeStyle = 100 / (characterSize * 2 + 1);

  return (
    <div
      className={`character`}
      style={{
        top: `${position.x * characterSizeStyle}%`,
        left: `${position.y * characterSizeStyle}%`,
        transform: directionStyle[direction],
        backgroundImage: backgroundAttack,
        width: `${characterSizeStyle}%`,
        height: `${characterSizeStyle}%`,
        maxWidth: `${characterSizeStyle}%`,
        maxHeight: `${characterSizeStyle}%`,
      }}
    />
  );
  a;
};

export default Character;
