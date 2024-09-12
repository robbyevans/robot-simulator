import React, { useState } from "react";
import Grid from "@components/GridBox/Gridbox";
import Controls from "@components/Controls/Controls";

export const runtime = "edge";

const App: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [angleOfRotation, setAngleOfRotation] = useState(0);

  // Rotate robot left (counter-clockwise)
  const rotateLeft = () => {
    setAngleOfRotation((prevAngle) => prevAngle - 90);
  };

  // Rotate robot right (clockwise)
  const rotateRight = () => {
    setAngleOfRotation((prevAngle) => prevAngle + 90);
  };

  const moveUp = () => {
    if (position.y < 4) {
      setPosition((prev) => ({ ...prev, y: prev.y + 1 }));
    }
  };

  const moveDown = () => {
    if (position.y > 0) {
      setPosition((prev) => ({ ...prev, y: prev.y - 1 }));
    }
  };

  const moveLeft = () => {
    if (position.x > 0) {
      setPosition((prev) => ({ ...prev, x: prev.x - 1 }));
    }
  };

  const moveRight = () => {
    if (position.x < 4) {
      setPosition((prev) => ({ ...prev, x: prev.x + 1 }));
    }
  };

  // takes the angle of rotation and returns the compass direction of the robot
  const getDirection = (angle: number) => {
    const directions = ["N", "E", "S", "W"];

    const normalizedAngle = angle % 360;
    const index = normalizedAngle / 90;

    return directions[Math.abs(index)];
  };

  return (
    <div className="app-container">
      <h1 className="title">Robot Simulator</h1>
      <Grid position={position} rotation={angleOfRotation} />
      <Controls
        rotateLeft={rotateLeft}
        rotateRight={rotateRight}
        moveUp={moveUp}
        moveDown={moveDown}
        moveLeft={moveLeft}
        moveRight={moveRight}
      />
      <div className="info">
        <p>
          Position: ({position.x}, {position.y})
        </p>
        <p>Facing: {getDirection(angleOfRotation)}</p>
      </div>
    </div>
  );
};

export default App;
