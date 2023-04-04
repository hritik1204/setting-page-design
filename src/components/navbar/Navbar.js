import React from "react";
import { FiPlus } from "react-icons/fi";

import Menubar from "../settingMenu/menubar/Menubar";
import "../navbar/navbar.css";
import NavIcons from "./navicons/NavIcons";
import ThemesSetting from "./themesetting/ThemesSetting";
import ProfilePic from "./profile/ProfilePic";

const Navbar = () => {
  return (
    <>
      <Menubar />
      <div className="navbar">
        <div className="nav-add">
          <span className="add-border">
            <FiPlus />
          </span>
        </div>
        <NavIcons />
        <ThemesSetting />
        <ProfilePic />
      </div>
    </>
  );
};

export default Navbar;
