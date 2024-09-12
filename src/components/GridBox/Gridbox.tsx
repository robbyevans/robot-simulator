import React from "react";
import Robot from "../Robot/Robot";
import "./_gridbox.scss";

type GridProps = {
  position: { x: number; y: number };
  direction: string; // 'N', 'E', 'S', or 'W'
};

const GridBox: React.FC<GridProps> = ({ position, direction }) => {
  return (
    <div className="gridbox-container">
      {Array.from({ length: 5 }).map((_, row) => (
        <div className="row" key={row}>
          {Array.from({ length: 5 }).map((_, col) => (
            <div className="cell" key={col}>
              {position.x === col && position.y === 4 - row && (
                <Robot direction={direction} />
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default GridBox;
