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
    display: "inline-block",
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
        <li id="about">
          {" "}
          <Link style={styles.navbar} to="/about">
            {" "}
            ABOUT US{" "}
          </Link>{" "}
        </li>
        <li>
          {" "}
          <Link style={styles.navbar} to="/order" id="order">
            {" "}
            ORDER{" "}
          </Link>{" "}
        </li>
        <li>
          {" "}
          <Link style={styles.navbar} to="/contact" id="contact">
            {" "}
            CONTACT{" "}
          </Link>{" "}
        </li>
        <li>
          {" "}
          <Link style={styles.navbar} to="/subscribe" id="subscribe">
            {" "}
            SUBSCRIBE{" "}
          </Link>{" "}
        </li>
        <li>
          {" "}
          <Link style={styles.navbar} to="/Login" id="login">
            {" "}
            LOG IN{" "}
          </Link>{" "}
        </li>
        <li>
          {" "}
          <Link style={styles.navbar} to="/Signup" id="signup">
            {" "}
            SIGN UP{" "}
          </Link>{" "}
        </li>{" "}
        <Link style={styles.navbar} to="/Cart" id="cart">
          <img src={Image} style={styles.cart}></img>
        </Link>{" "}
      </ul>
    </nav>
  );
}
