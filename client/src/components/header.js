import React from "react";
// import "../style.css";
import image from "../assets/images/dark-logo.png";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="row ">
      <div className="d-flex flex-column align-items-center">
        <Link to="/">
          <img style={{ height: "10rem" }} id="logo" src={image} alt="logo" />
        </Link>
      </div>
    </div>
  );
}
