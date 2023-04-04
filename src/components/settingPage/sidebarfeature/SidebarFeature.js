import React from "react";
import { RxDotFilled } from "react-icons/rx";

const SidebarFeature = () => {
  return (
    <div className="feature-wrapper">
      <div className="feature-heading">
        <h4>Sidebar feature</h4>
        <p>What shows in the desktop sidebar</p>
      </div>
      <div className="feature-select">
        <select>
          <option>
            <span className="feature-dot">🟢 </span> Recent Changes
          </option>
          <option>A</option>
          <option>B</option>
        </select>
      </div>
    </div>
  );
};

export default SidebarFeature;
