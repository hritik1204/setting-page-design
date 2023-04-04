import React from "react";

import { AiOutlineFlag, AiOutlineTeam, AiOutlineCodepen } from "react-icons/ai";

import { BsStars } from "react-icons/bs";
import { CgProfile, CgPassword } from "react-icons/cg";
import { FaMoneyCheck } from "react-icons/fa";
import { TbAppWindow } from "react-icons/tb";

import "../../settingMenu/setting.css";

const Menu = () => {
  return (
    <div className="menus">
      <div className="menu">
        <span>
          <AiOutlineFlag size={30} />
        </span>
        <p>My Details</p>
      </div>

      <div className="menu">
        <span>
          <CgProfile size={30} />
        </span>
        <p>Profile</p>
      </div>

      <div className="menu">
        <span>
          <CgPassword size={30} />
        </span>
        <p>Password</p>
      </div>

      <div className="menu">
        <span>
          <BsStars size={30} />
        </span>
        <p>Appearance</p>
      </div>

      <div className="menu">
        <span>
          <AiOutlineTeam size={30} />
        </span>
        <p>Team</p>
      </div>

      <div className="menu">
        <span>
          <FaMoneyCheck size={30} />
        </span>
        <p>Billing</p>
      </div>

      <div className="menu">
        <span>
          <TbAppWindow size={30} />
        </span>
        <p>Application</p>
      </div>

      <div className="menu">
        <span>
          <AiOutlineCodepen size={30} />
        </span>
        <p>API</p>
      </div>
    </div>
  );
};

export default Menu;
