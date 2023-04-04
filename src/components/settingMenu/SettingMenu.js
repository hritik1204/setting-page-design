import React from "react";
import { RxDotFilled } from "react-icons/rx";
import { FiSearch } from "react-icons/fi";

import "../settingMenu/setting.css";
import Menu from "./menu/Menu";
import Menubar from "./menubar/Menubar";

const SettingMenu = () => {
  return (
    <div className="setting">
      <div className="setting-heading">
        <span>
          <RxDotFilled size={35} />
        </span>
        <h2>Untitled UI</h2>
      </div>
      <h3>Settings</h3>
      <div className="setting-menu">
        <div className="input-wrapper">
          <FiSearch size={30} />
          <input placeholder="Search" />
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default SettingMenu;
