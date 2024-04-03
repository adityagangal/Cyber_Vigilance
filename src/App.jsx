import React from "react";
import { Chart as ChartJS, defaults } from "chart.js/auto";
import { Line } from "react-chartjs-2";

import "./App.css";

import chartData from "/src/data/Advanced persistent_data_1.json";

defaults.maintainAspectRatio = false;
defaults.responsive = true;

defaults.plugins.title.display = true;
defaults.plugins.title.align = "start";
defaults.plugins.title.font.size = 20;
defaults.plugins.title.color = "black";

export const App = () => {
  return (
    <div className="App">
      <nav className="navbar">
        <div className="logo">Logo</div>
        <div className="nav-links">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>
      </nav>
      <div className="dataCards">
        <div className="dataCard revenueCard">
          <Line
            data={chartData.data}
            options={chartData.options}
          />
        </div>
      </div>
    </div>
  );
};