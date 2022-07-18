import React, { useEffect, useState } from "react";
import "../style.css";
import { Link } from "react-router-dom";
import Image from "../assets/images/shopping-cart.png";
import Auth from "../utils/auth";
import { QUERY_USER } from "../utils/queries";
import { useQuery } from "@apollo/client";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";

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
  cartBtn: {
    height: "1.5rem",
    width: "1.5rem",
    // filter: "invert(1)",
  },
  cart: {
    textDecoration: "none",
    color: "#FF007F",
    listStyle: "none",
    fontFamily: "Syncopate",
    fontDisplay: "sans-serif",
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
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
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
              className="btn bg-light m-1 "
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
        <div style={styles.navbar} id="cart">
          <Button
            style={styles.navbar}
            // variant="primary"
            onClick={handleShow}
            className="btn btn-light bg-light m-1"
            type="button"
            id="cartBtn"
          >
            <img src={Image} style={styles.cartBtn} />
          </Button>
          {["end"].map((placement, idx) => (
            <Offcanvas
              key={idx}
              placement={placement}
              name={placement}
              show={show}
              onHide={handleClose}
              className="align-items-center justify-content-between"
              id="offcanvasRight"
              style={styles.cart}
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title>your freezer</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <ul>
                  <li className="list-group-item "></li>
                </ul>
              </Offcanvas.Body>
            </Offcanvas>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
