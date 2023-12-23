import React from "react";
import Navbar from "../components/Navbar/Navbar";
import "./dashboard.css";
import Overview from "../components/overview/Overview";
const Dasboard = () => {
  return (
    <div className="grid-container">
      <Navbar />
      <main className="main-container">
        <Overview />
      </main>
    </div>
  );
};

export default Dasboard;
