import MazeBuilder from '../useMaze/MazeBuilder';

const getTile = (size: number, tileType: string) => {
  const styleSizeVw = `${size}vw`;
  const styleSizeVh = `${size}vh`;
  console.log(tileType);
  return (
    <div
      className={`tile ${tileType}`}
      style={{
        width: styleSizeVw,
        height: styleSizeVw,
        maxWidth: styleSizeVh,
        maxHeight: styleSizeVh,
      }}
    />
  );
};

interface UseMazeProps {
  rows: number;
  columns: number;
}

const useMaze = ({ rows, columns }: UseMazeProps) => {
  const maze = new MazeBuilder(rows, columns);
  const boundaries = maze.maze;
  let start = { x: 0, y: 0 };
  // const render = boundaries.map((row) => row.map((tileType) => tile[tileType]));
  const render = boundaries.map((row, i) => (
    <div className="line">
      {row.map((tileType, j) => {
        if (tileType?.[1] === 'entrance') {
          start = { x: i, y: j };
        }
        return getTile(100 / (2 * rows + 1), tileType[0] || 'floor');
      })}
    </div>
  ));

  return { render, boundaries, start };
};

export default useMaze;
