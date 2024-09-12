import React from "react";
import { FaRobot } from "react-icons/fa";
import "@styles/Robot/_robot.scss";

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
