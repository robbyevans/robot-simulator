import React, { useState } from "react";
import "./_app.scss";
import Grid from "./components/GridBox/Gridbox";
import Controls from "./components/Controls/Controls";

const directions = ["N", "E", "S", "W"];

const App: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [directionIndex, setDirectionIndex] = useState(0); // Index for directions (0: N, 1: E, 2: S, 3: W)

  // Move robot forward in the direction it is facing

  // Rotate robot left (counter-clockwise)
  const rotateLeft = () => {
    setDirectionIndex((prevIndex) => (prevIndex === 0 ? 3 : prevIndex - 1));
  };

  // Rotate robot right (clockwise)
  const rotateRight = () => {
    setDirectionIndex((prevIndex) => (prevIndex === 3 ? 0 : prevIndex + 1));
  };

  // Direct movement
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

  return (
    <div className="app-container">
      <h1 className="title">Robot Simulator</h1>
      <Grid position={position} direction={directions[directionIndex]} />
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
        <p>Facing: {directions[directionIndex]}</p>
      </div>
    </div>
  );
};

export default App;
