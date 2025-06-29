import Sidebar from "../components/Sidebar";
import React from "react";
import { Outlet } from "react-router-dom";

function Dashboard() {
  return (
    <div>
      <Sidebar />
      <div className="flex">
        <Outlet />
      </div>
    </div>
  );
}

export default Dashboard;
