import React from "react";
import "./Sidebar.css";
import { Avatar } from "@mui/material";

function Sidebar() {
  const recentItem = (topic) => (
    <div className="sidebar__recentItem">
      <span className="sidebar__hash">#</span>
      <p>{topic}</p>
    </div>
  );

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          src="https://thingscareerrelated.files.wordpress.com/2021/10/default-background-image.png"
          alt=""
        />
        <Avatar className="sidebar__avatar" />
        <h2>Shivaprian S</h2>
        <h4>shivaprian@gmail.com</h4>
      </div>
      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Profile views</p>
          <p className="sidebar__statNumber">654</p>
        </div>
        <div className="sidebar__stat">
          <p>Post Impressions</p>
          <p className="sidebar__statNumber">2,154</p>
        </div>
      </div>

      <div className="sidebar__bottom">
        <p>Recent</p>
        <p>
          {recentItem("ReactJs")}
          {recentItem("programming")}
          {recentItem("software engineering")}
          {recentItem("design")}
        </p>
      </div>
    </div>
  );
}

export default Sidebar;
