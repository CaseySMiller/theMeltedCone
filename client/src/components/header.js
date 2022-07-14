import React from "react";
// import "../style.css";
import Image from "../assets/images/logo.png";

export default function Header() {
  return (
    <div className="d-flex flex-column justify-content-between flex-md-row align-items-center p-3 px-md-4 mb-3">
      <h5 className="my-0 mr-md-auto font-weight-normal">
        <a href="/">
          <img style={{ height: "6rem" }} id="logo" src={Image} alt="logo" />
        </a>
      </h5>
    </div>
  );
}
