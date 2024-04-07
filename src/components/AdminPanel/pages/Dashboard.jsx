import React from "react";
import dimage from "../images/dashboard.png";
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="container">
      <h1>Dashboard</h1>
      <p>
        Hello there this is your dashboard. Here you can see all the data related to your account and make changes if needed.
      </p>
      <img src={dimage} alt="Dashboard" />
    </div>
  );
};

export default Dashboard;
