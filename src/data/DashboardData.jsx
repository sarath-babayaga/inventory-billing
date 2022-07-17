import React, { useState } from "react";
import BarChart from "../chart/BarChart";
// import {useState} from "react/cjs/react.production.min"
import { UserData } from "../chart/Data";
import LineChart from "../chart/LineChart";
import "./DashboardData.css"

const DashboardData = () => {
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "Users Gained",
        data: UserData.map((data) => data.sales),
        backgroundColor: ["red", "green", "blue", "orange", "pink"],
        borderColor: "black",
        borderWidth: 2
      },
    ],
  });

  return (
    <>
    <div className="barchart">
      {/* <div style={{width:700}} */}
      <BarChart chartData={userData} />

    </div>
    <div className="linechart">
    {/* <div style={{width:700}} */}
    <LineChart chartData={userData} />

    {/* <div className="dashboard-content"> */}
    {/* </div> */}

  </div>
  </>
  );
};

export default DashboardData;
