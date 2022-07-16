import React from "react";
// import "../style.css";
import image from "../assets/images/dark-logo.png";

export default function Footer() {
  return (
    <div className="row ">
      <div className="d-flex flex-column text-center">
        <p>☻ the MELTED CONE, LLC</p>
        <a href="/">
          <img style={{ height: "3rem" }} id="logo" src={image} alt="logo" />
        </a>
      </div>
    </div>
  );
}
