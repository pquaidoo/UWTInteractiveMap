import React from "react";
import Floor from "./Assets/SNOQUALMIE_Floor1.png"; // Path to your image
import { useStyle } from "./AppContext";
import "./mini_map.css";

const Floors = () => {
  const { className } = useStyle();

  return (
    <div className="SNO_floor_1">
      <img src={Floor} alt="Floor Plan" />
      <div className={className}>
        {/* Overlay content goes here, e.g., text or icons */}
        <p>Overlay</p>
      </div>
    </div>
  );
};

export default Floors;
