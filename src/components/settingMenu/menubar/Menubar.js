import React, { useState } from "react";
import { MdClose } from "react-icons/md";
import { HiMenuAlt1 } from "react-icons/hi";
import { RxDotFilled } from "react-icons/rx";

import Menu from "../menu/Menu";
import "../../settingMenu/setting.css";
import { FiSearch } from "react-icons/fi";

const Menubar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="menubar">
      {toggleMenu ? (
        <div className="menubar-close">
          <HiMenuAlt1 size={30} onClick={() => setToggleMenu(false)} />
        </div>
      ) : (
        <div className="menubar-open">
          <div className="open-menu-heading">
            <h1>Settings</h1>
            <MdClose size={30} onClick={() => setToggleMenu(true)} />
          </div>
          <div className="open-menu-content">
            <div className="input-wrapper">
              <FiSearch size={30} />
              <input placeholder="Search" />
            </div>
            <Menu />
          </div>
        </div>
      )}
    </div>
  );
};

export default Menubar;
