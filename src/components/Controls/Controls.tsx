import React from "react";
import {
  FaArrowUp,
  FaArrowDown,
  FaArrowLeft,
  FaArrowRight,
} from "react-icons/fa";
import { BiRotateLeft, BiRotateRight } from "react-icons/bi";

type ControlsProps = {
  rotateLeft: () => void;
  rotateRight: () => void;
  moveUp: () => void;
  moveDown: () => void;
  moveLeft: () => void;
  moveRight: () => void;
};

const Controls: React.FC<ControlsProps> = ({
  rotateLeft,
  rotateRight,
  moveUp,
  moveDown,
  moveLeft,
  moveRight,
}) => {
  return (
    <div className="controls-container">
      <div className="rotation-btn">
        <button className=" rotate-btn" onClick={rotateLeft}>
          <BiRotateLeft />
        </button>
        <button className=" rotate-btn" onClick={rotateRight}>
          <BiRotateRight />
        </button>
      </div>

      <div className="direction-btns">
        <button className=" direction-btn up-btn" onClick={moveUp}>
          <FaArrowUp />
        </button>
        <button className=" direction-btn left-btn" onClick={moveLeft}>
          <FaArrowLeft />
        </button>
        <button className=" direction-btn down-btn" onClick={moveDown}>
          <FaArrowDown />
        </button>
        <button className=" direction-btn right-btn" onClick={moveRight}>
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Controls;
