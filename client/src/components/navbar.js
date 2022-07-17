import React, { useEffect, useState } from "react";
import "../style.css";
import { Link } from "react-router-dom";
import Image from "../assets/images/shopping-cart.png";
import Auth from "../utils/auth";
import { QUERY_USER } from "../utils/queries";
import { useQuery } from "@apollo/client";

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
const Navbar = () => {
  // console.log(Auth.getProfile().data._id)
  const { loading, data } = useQuery(QUERY_USER);
  const [userData, setUserData] = useState({});

  useEffect(() => {
    const user = data?.user || {};
    setUserData(user);
  }, [loading]);
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  const [show, setShow] = useState(false);
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
      </ul>
      <div>
        {Auth.loggedIn() ? (
          <>
            <Link
              style={styles.navbar}
              className="btn bg-light m-1"
              to="/profile"
            >
              {userData.firstName}'s profile
            </Link>

            <a
              style={styles.navbar}
              className="btn bg-light m-1"
              onClick={logout}
            >
              Logout
            </a>
          </>
        ) : (
          <>
            <Link
              style={styles.navbar}
              className="btn bg-light m-1"
              to="/Login"
            >
              Login
            </Link>
            <Link
              style={styles.navbar}
              className="btn bg-light m-1"
              to="/Signup"
            >
              Signup
            </Link>
          </>
        )}
        <Link style={styles.navbar} to="/Cart" id="cart">
          <img src={Image} style={styles.cart}></img>
        </Link>{" "}
      </div>
    </nav>
  );
};

export default Navbar;
