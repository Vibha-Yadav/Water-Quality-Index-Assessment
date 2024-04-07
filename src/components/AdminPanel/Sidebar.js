import React, { useState, useEffect, } from "react";
import "./sidebar.css";
import Dashboard from "./pages/Dashboard";
import Tracker from "./pages/Tracker";

import { FaBars } from "react-icons/fa";
import { NavLink } from "react-router-dom";



const Sidebar = ({ handleTabChange,activeTab}) => {
  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => setIsOpen(!isOpen);
  
  const menuItem = [
    {
      tab: "Dashboard",
    },
    {
      tab: "Tracker",
    },
    {
      tab: "Conductivity",
    },

    {
      tab: "Nitrate",
    },
    {
      tab: "Temperature",
    },
    {
      tab: "Turbidity",
    },
  ];

  return (
    <div className="container" id="side">
      <div style={{ width: isOpen ? "300px" : "50px" }} className="sidebar">
        <div className="top_section">
          <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">
            Admin
          </h1>
          <div style={{ marginLeft: isOpen ? "50px" : "0px" }} className="bars">
            <FaBars onClick={toggle} />
          </div>
        </div>
        {menuItem.map(({tab}, index) => (

          <div onClick={()=>{handleTabChange(tab)}}
            key={index}
            style={{backgroundColor: activeTab === tab && '#181818' }}

          >
            <div
              style={{ display: isOpen ? "block" : "none" }}
              className="link_text"
            >
              {tab}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
