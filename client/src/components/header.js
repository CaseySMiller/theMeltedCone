import React from "react";
// import "../style.css";
import image from "../assets/images/logo.png";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <Link to="/">
        <img style={{ height: "10rem" }} id="logo" src={image} alt="logo" />
      </Link>
    </div>
  );
}
