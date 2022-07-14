import React from "react";
import "../style.css";
import Image from "../assets/images/logo-1.png";

export default function Header() {
  return (
    <div>
      <a href="/">
        <img style={{ height: "6rem" }} id="logo" src={Image} alt="logo" />
      </a>
    </div>
  );
}
