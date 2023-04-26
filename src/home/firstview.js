
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
// import { useRef } from "react";

export default function FirstView(props) {
  // const refDemo=useRef();
  
  const [color, setcolor] = useState("#F3B61C");

  const styles = {
    backgroundColor: color,
    color: props.color,
    transition: "1.5s ease",
    marginTop: "12rem",
  };
  const colorstyle = {
    color: props.color,
    display: "flex",
    flexDirection: "row",
  };

  setTimeout(() => {
    if (color === "#F3B61C") setcolor("#1e7727");
    else setcolor("#F3B61C");
  }, 3000);

  return (
    <div className="firstview">

      <div className="desc">
        <div className={`name `} style={styles}>
          Hi<div>I'am Pradip</div>{" "}
          <div style={{ fontsize: "1.1rem" }}>Chapagain</div>
        </div>

        <div className="text">
          <p className="short" style={colorstyle}>
            Computer Science student expertise in Full Stack Web Dev, Flutter,
            and learning AI
          </p>
        </div>
        <Link to="/resume">
          {" "}
          <button> Get Resume!!</button>
        </Link>
      </div>
    </div>
  );
}
