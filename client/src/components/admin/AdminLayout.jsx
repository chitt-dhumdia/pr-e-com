import React from "react";
import Sidebar from "./Sidebar";
import TopNavbar from "./TopNavbar";
import "./AdminLayout.css";

const AdminLayout = ({ children }) => {
  return (
    <div>

      <Sidebar />

      <div className="main-content">

        <TopNavbar />

        <div className="content">

          {children}

        </div>

      </div>

    </div>
  );
};

export default AdminLayout;