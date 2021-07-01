import React from "react";

import "./Sidebar.css";
import { Avatar } from "@material-ui/core";

function Sidebar() {
  // Rendering some JSX code from functions
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
          src="https://images.unsplash.com/photo-1624375147958-678d727cc0c4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
          alt=""
        ></img>
        <Avatar className="sidebar__avatar" />
        <h2>Ruturaj Chaubey</h2>
        <h4>ruturajchaubey16@gmail.com</h4>
      </div>

      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p> Who viewed you </p>
          <p className="sidebar__statNumber"> 2,544 </p>
        </div>
        <div className="sidebar__stat">
          <p> Views on post </p>
          <p className="sidebar__statNumber"> 2,344 </p>
        </div>
      </div>

      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItem("ReactJs")}
        {recentItem("Programming")}
        {recentItem("Software Engineering")}
        {recentItem("Software Design")}
        {recentItem("Software Developer")}
      </div>
    </div>
  );
}

export default Sidebar;
