import React from "react";
import { MdDarkMode } from "react-icons/md";

import "../../settingPage/settingPage.css";

const InterfaceMode = ({ icon, bg }) => {
  return (
    <div className="ui-theme" style={{ backgroundColor: bg }}>
      {icon}
    </div>
  );
};

export default InterfaceMode;
