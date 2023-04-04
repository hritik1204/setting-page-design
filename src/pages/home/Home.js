import React from "react";

import "../home/home.css";
import Navbar from "../../components/navbar/Navbar";
import SettingMenu from "../../components/settingMenu/SettingMenu";
import SettingPage from "../../components/settingPage/SettingPage";

const Home = () => {
  return (
    <div className="container">
      <Navbar />
      <SettingMenu />

      <SettingPage />
    </div>
  );
};

export default Home;
