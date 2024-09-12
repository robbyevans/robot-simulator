import React from "react";
import Robot from "@components/Robot/Robot";
import "@styles/GridBox/_gridbox.scss";

type GridProps = {
  position: { x: number; y: number };
  rotation: number;
};

const GridBox: React.FC<GridProps> = ({ position, rotation }) => {
  return (
    <div className="gridbox-container">
      {Array.from({ length: 5 }).map((_, row) => (
        <div className="row" key={row}>
          {Array.from({ length: 5 }).map((_, col) => (
            <div className="cell" key={col}>
              {position.x === col && position.y === 4 - row && (
                <Robot rotation={rotation} />
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default GridBox;
