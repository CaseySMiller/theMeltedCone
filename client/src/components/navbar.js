import React from "react";
import "../style.css";
import { Link } from "react-router-dom";
import Image from "../assets/images/shopping-cart.png";

const styles = {
  navbar: {
    backgroundColor: "#FFD6E8",
    textDecoration: "none",
    color: "#FF007F",
    listStyle: "none",
    fontFamily: "Syncopate",
    fontDisplay: "sans-serif",
  },
  cart: {
    height: "1.5rem",
    width: "1.5rem",
    // filter: "invert(1)",
  },
};
export default function Navbar() {
  return (
    <nav id="nav-bar" className="w-100 mt-auto p-3" style={styles.navbar}>
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
        <li>
          {" "}
          <Link style={styles.navbar} to="/Login">
            {" "}
            LOG IN{" "}
          </Link>{" "}
        </li>
        <li>
          {" "}
          <Link style={styles.navbar} to="/Signup">
            {" "}
            SIGN UP{" "}
          </Link>{" "}
        </li>{" "}
        <Link style={styles.navbar} to="/Cart">
          <img src={Image} style={styles.cart}></img>
        </Link>{" "}
      </ul>
    </nav>
  );
}
