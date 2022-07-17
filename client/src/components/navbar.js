import React, { useEffect, useState } from "react";
import "../style.css";
import { Link } from "react-router-dom";
import Image from "../assets/images/shopping-cart.png";
import Auth from "../utils/auth";
import { QUERY_USER } from '../utils/queries';
import { useQuery } from '@apollo/client';


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
    }, [loading])

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
          {/* display login if no user or firstName if logged in */}
          <Link 
            style={styles.navbar} 
            to={userData.email ? "/profile" : "/Login" }
            id={userData.email ? "profile" : "login"}
          >
            {" "}
            {userData.email ? userData.firstName : "LOG IN"}
            {" "}
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

export default Navbar

