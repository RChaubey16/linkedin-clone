import React from "react";
import "./HeaderOption.css";
import { Avatar } from "@material-ui/core";

function HeaderOptions({ avatar, Icon, title }) {
  // destructuring of props to avatar, Icon and title
  return (
    <div className="headerOption">
      {/* If the icon is present then only render the Icon compo */}
      {Icon && <Icon className="headerOption__icon" />}
      {avatar && <Avatar className="headerOption__icon" src={avatar} />}
      <h3 className="headerOption__title">{title}</h3>
    </div>
  );
}

export default HeaderOptions;
