import { FormControlLabel } from "@mui/material";
import React from "react";
import IOSSwitch from "../toggleSwitch/IOSSwitch";

const TransparentSidebar = () => {
  return (
    <div className="sidebar-wrapper">
      <div className="sidebar-heading">
        <h4>Transparent sidebar</h4>
        <p>Make the desktop sidebar transparent</p>
      </div>
      <div className="toggle-btn">
        <FormControlLabel
          control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
        />
      </div>
    </div>
  );
};

export default TransparentSidebar;
