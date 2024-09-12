import React from "react";
import { FaRobot } from "react-icons/fa";

type RobotProps = {
  rotation: number;
};

const Robot: React.FC<RobotProps> = ({ rotation }) => {
  return (
    <FaRobot
      className="robot"
      style={{ transform: `rotate(${rotation}deg)` }}
    />
  );
};

export default Robot;
