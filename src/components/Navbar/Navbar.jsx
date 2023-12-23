import React, { useState } from "react";
import "./navbar.css"
import Sidebar from "../sidebar/Sidebar";
import search from "../../assets/Search.svg"
import help from "../../assets/Help.svg";
import menu from "../../assets/Menu.svg"
import group from "../../assets/Group.svg"
const Navbar = () => {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };
;
  return (
    <>
      <header className="header">
        <div className="menu-icon-left">
          <p>
            <img src={help} alt="" />
            How it works
          </p>
        </div>
        <div className="menu-icon-center">
          <img src={search} alt="" />
          <input type="text" placeholder="Search features,tutorials,etc." />
        </div>
        <div className="header-icon-right">
          <div className="header-icon-right-inner">
            <div className="img-right">
              <img src={group} alt="" />
            </div>
            <img src={menu} alt="" />
          </div>
        </div>
      </header>
      <Sidebar
        openSidebarToggle={openSidebarToggle}
        OpenSidebar={OpenSidebar}
      />
    </>
  );
};

export default Navbar;