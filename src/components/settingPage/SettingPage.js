import React from "react";

import "../settingPage/settingPage.css";
import { RxDotFilled } from "react-icons/rx";

import UIInterface from "./uiInterface/UIInterface";
import TransparentSidebar from "./transparentSidebar/TransparentSidebar";
import BorderDiv from "./borderDiv/BorderDiv";
import SidebarFeature from "./sidebarfeature/SidebarFeature";
import TableView from "./tableview/TableView";
import CustomButton from "./button/CustomButton";

const SettingPage = () => {
  return (
    <div className="setting-page">
      <div className="heading-wrapper">
        <div className="heading">
          <span>
            <RxDotFilled size={35} />
          </span>
          <h1>Settings</h1>
        </div>

        <div className="heading-detail">
          <h3>Appearance</h3>
          <p>Change how Untitled UI looks and feels in your browser.</p>
        </div>
      </div>
      <BorderDiv />
      <UIInterface />
      <BorderDiv />
      <TransparentSidebar />
      <BorderDiv />
      <SidebarFeature />
      <BorderDiv />
      <TableView />
      <BorderDiv />
      <CustomButton />
    </div>
  );
};

export default SettingPage;
