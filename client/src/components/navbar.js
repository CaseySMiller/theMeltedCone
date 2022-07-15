import React from "react";
import "../style.css";
import { Link } from "react-router-dom";

const styles = {
  navbar: {
    backgroundColor: "#FFD6E8",
    textDecoration: "none",
    color: "#FF007F",
    listStyle: "none",
  },
};
export default function Navbar() {
  return (
    <nav id="nav-bar" className="w-100 mt-auto  p-3" style={styles.navbar}>
      <ul style={styles.navbar}>
        <li>
          {" "}
          <Link style={styles.navbar} to="/about">
            {" "}
            ABOUT US{" "}
          </Link>{" "}
        </li>
        <li>
          {" "}
          <Link style={styles.navbar} to="/order">
            {" "}
            ORDER{" "}
          </Link>{" "}
        </li>
        <li>
          {" "}
          <Link style={styles.navbar} to="/contact">
            {" "}
            CONTACT{" "}
          </Link>{" "}
        </li>
        <li>
          {" "}
          <Link style={styles.navbar} to="/subsribe">
            {" "}
            SUBSCRIBE{" "}
          </Link>{" "}
        </li>
      </ul>
    </nav>
  );
}
