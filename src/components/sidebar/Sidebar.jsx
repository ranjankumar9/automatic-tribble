import React from "react";
import "./sidebar.css";
import { Link } from "react-router-dom";
import img1 from "../../assets/1.svg";

import wallet from "../../assets/wallet.svg";
import down from "../../assets/Chevron Down.svg";
import { linkData } from "./sidebarItem";

function Sidebar({ openSidebarToggle, OpenSidebar }) {
  return (
    <aside
      id="sidebar"
      className={openSidebarToggle ? "sidebar-responsive" : ""}
    >
      <div className="movalble-sidebar">
        <div>
          <div className="sidebar-title">
            <div className="sidebar-brand">
              <img src={img1} alt="" />
              <div className="sidebar-header-text1">
                <p>Nishyan</p>
                <Link>Visit store</Link>
              </div>
              <img src={down} alt="" />
            </div>
          </div>

          <ul className="sidebar-list">
            {linkData.map((el) => {
              return (
                <li className="sidebar-list-item">
                  <Link to="/" className="sidebar-link">
                    <img src={el.img} alt="" />
                    {el.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="available-credits-div">
          <div className="bottom-img-sidebar">
            <img src={wallet} alt="wallet" />
          </div>
          <div className="sidebar-bottom-text">
            <p>Available credits</p>
            <p className="digit-sidebar">522.10</p>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
