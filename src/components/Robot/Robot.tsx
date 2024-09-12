import React from "react";
import { FaRobot } from "react-icons/fa";
import "./_robot.css";

type RobotProps = {
  direction: string; // 'N', 'E', 'S', or 'W'
};

const Robot: React.FC<RobotProps> = ({ direction }) => {
  return <FaRobot className={`robot direction-${direction}`} />;
};

export default Robot;
