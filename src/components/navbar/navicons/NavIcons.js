import React from "react";

import { BsLayers } from "react-icons/bs";
import { FiUsers, FiSettings } from "react-icons/fi";
import {
  RiHome6Line,
  RiFundsBoxLine,
  RiCheckboxMultipleLine,
  RiInboxUnarchiveLine,
  RiBarChartFill,
} from "react-icons/ri";

import "../../navbar/navbar.css";
const NavIcons = () => {
  return (
    <div className="nav-icons">
      <span>
        <RiHome6Line size={25} />
      </span>
      <span>
        <RiFundsBoxLine size={25} />
      </span>
      <span>
        <BsLayers size={25} />
      </span>
      <span>
        <RiInboxUnarchiveLine size={25} />
      </span>
      <span>
        <RiBarChartFill size={25} />
      </span>
      <span>
        <FiUsers size={30} />
      </span>
      <span>
        <FiSettings size={30} />
      </span>
    </div>
  );
};

export default NavIcons;
