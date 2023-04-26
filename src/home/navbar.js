import React from "react";
import { useState } from "react";
import { DarkModeRounded, LightModeRounded } from "@mui/icons-material";
import { Link } from "react-router-dom";
export default function Navbar(props) {
  const handleClickScroll = (id) => {
    const element = document.getElementById(id);

    // 👇 Will scroll smoothly to the top of the next section
    element.scrollIntoView({ behavior: "smooth" });
  };

  const colorstyle = {
    color: props.color,
    display: "flex",
    flexDirection: "row",
  };
  return (
    <div className="nav">
      <ul className="" style={colorstyle}>

        <li>
          {" "}
          <Link to="/" className="Link">Home</Link>
        </li>
        <li
          onClick={() => {
            handleClickScroll("skillcards");
          }}
        >
          Skills
        </li>
        <li
          //
          onClick={() => {
            props.handlescroll(props.scrollref.current);
          }}
        >
          Projects
        </li>

        <li onClick={props.clickmode}>
          {" " + props.color === "black" ? (
            <LightModeRounded />
          ) : (
            <DarkModeRounded />
          )}
        </li>
      </ul>
    </div>
  );
}
