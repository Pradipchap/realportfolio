import React from "react";
import { useState } from "react";

export default function Loading(props) {
  const [width, setwidth] = useState(0);
  // const [state, setstate] = useState(false);

  const changevalueonScroll = () => {
    const scrollvalue = document.documentElement.scrollTop;

    if (scrollvalue > 450) {
      // setstate(true);
      setwidth(props.completed);
    }
    //  else setstate(false);
  };
  window.addEventListener("scroll", changevalueonScroll);

  const getwidth = () => {
    return width;
  };

  const fillerStyles = {
    height: "100%",
    width: `${getwidth()}%`,
    backgroundColor: "red",
    borderRadius: "inherit",
    textAlign: "right",

    transition: "width 1.5s ease-in-out",
  };

  return <div style={fillerStyles}></div>;
}
