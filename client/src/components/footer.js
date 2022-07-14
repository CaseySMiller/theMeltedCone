import React from "react";
// import "../style.css";
import image from "../assets/images/logo.png";

export default function Footer() {
  return (
    <div>
      <a href="/">
        <img style={{ height: "10rem" }} id="logo" src={image} alt="logo" />
      </a>
    </div>
  );
}
