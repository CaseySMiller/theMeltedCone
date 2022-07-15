import React from "react";
// import "../style.css";

export default function Navbar() {
  return (
    <nav className="w-100 mt-auto bg-dark p-3">
      <ul>
        <li>
          {" "}
          <Link to="/"> ABOUT US </Link>{" "}
        </li>
        <li>
          {" "}
          <Link to="/"> ORDER </Link>{" "}
        </li>
        <li>
          {" "}
          <Link to="/"> CONTACT </Link>{" "}
        </li>
        <li>
          {" "}
          <Link to="/"> SUBSCRIBE </Link>{" "}
        </li>
      </ul>
    </nav>
  );
}
