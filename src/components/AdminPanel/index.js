import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import "./sidebar.css";
import { FaBars } from "react-icons/fa";
import { NavLink,useNavigate  } from "react-router-dom";
import { useState } from "react";
import "./images/dashboard.png";
import Sidebar from "./Sidebar";
import Dashboard from "./pages/Dashboard";
import Tracker from "./pages/Tracker";
import Conductivity from "./pages/Conductivity";
import Temperature from "./pages/Temperature";
import Nitrate from "./pages/Nitrate";
import Turbidity from "./pages/Turbidity";


import { getAuth, signOut } from "firebase/auth";

export const Admin = ({setUser, setLoader}) => {
  const [activeTab, setActiveTab] = useState("Dashboard");

  const navigate= useNavigate()
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

 const logout = async () => {
    const auth = getAuth();

    try {
      await signOut(auth);
      setUser(null);
      setLoader(false);
      console.log('user signout successfully!')
      navigate('/')
      
    } catch (err) {
      console.log('Error occured in signout')
    }
      
  };

  return (
    <div className="AdminPage">
      <Sidebar
        isOpen={false}
        handleTabChange={handleTabChange}
        activeTab={activeTab}
      />
      <div>
        {activeTab === "Dashboard" && <Dashboard />}
        {activeTab === "Turbidity" && <Turbidity />}
        {activeTab === "Nitrate" && <Nitrate />}
        {activeTab === "Conductivity" && <Conductivity />}
        {activeTab === "Tracker" && <Tracker />}
        {activeTab === "Temperature" && <Temperature />}
      </div>
      {/* <img src="./images/dashboard.png"/> */}
      <button type="submit" onClick={logout}>
        
        Logout
      </button>
    </div>
  );
};
