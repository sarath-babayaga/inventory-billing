import React from "react";
import "./Dashboard.css";
import Card from "./Card"
import DashboardData from "../data/DashboardData"
const Dashboard = () => {
  return (
    <div className="dashboard-content">
      {/* <CustomLink to="/dashboard">Dashboard</CustomLink> */}
      {/* <h1>Dashboard</h1> */}
      {/* <Card/> */}
      <DashboardData/>
      <h1>Explore the inventory billing with the new website!!!</h1>

    </div>
  );
};

export default Dashboard;
