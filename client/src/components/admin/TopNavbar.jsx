import React from "react";
import "./TopNavbar.css";

const TopNavbar = () => {
  return (
    <div className="top-navbar">

      <h4>Admin Dashboard</h4>

      <div className="admin-profile">

        <i className="bi bi-bell"></i>

        <div className="admin-info">

          <h6>Admin</h6>
          <small>Administrator</small>

        </div>

        <img
          src="https://i.pravatar.cc/40"
          alt="admin"
        />

      </div>

    </div>
  );
};

export default TopNavbar;