import React from "react";
import { FiPlus } from "react-icons/fi";

import "../../navbar/navbar.css";
const ThemesSetting = () => {
  return (
    <div className="theme">
      <span className="add-themes">
        <FiPlus />
      </span>
      <div className="theme-color">
        <div
          style={{
            width: "10px",
            height: "10px",
            border: "1px solid #E11299",
            backgroundColor: "#E11299",
            borderRadius: "50%",
          }}
          on
        ></div>
        <div
          style={{
            width: "10px",
            height: "10px",
            border: "1px solid #62CDFF",
            backgroundColor: "#62CDFF",
            borderRadius: "50%",
          }}
        ></div>
        <div
          style={{
            width: "10px",
            height: "10px",
            border: "1px solid #5F8D4E",
            backgroundColor: "#5F8D4E",
            borderRadius: "50%",
          }}
        ></div>
        <div
          style={{
            width: "10px",
            height: "10px",
            border: "1px solid #FFA3FD",
            backgroundColor: "#FFA3FD",
            borderRadius: "50%",
          }}
        ></div>
        <div
          style={{
            width: "10px",
            height: "10px",
            border: "1px solid #FFCACA",
            backgroundColor: "#FFCACA",
            borderRadius: "50%",
          }}
        ></div>
      </div>
    </div>
  );
};

export default ThemesSetting;
