import React, { useEffect, useState } from "react";
import "../style.css";
import { Link } from "react-router-dom";
import Image from "../assets/images/shopping-cart.png";
import Auth from "../utils/auth";
import { QUERY_USER } from "../utils/queries";
import { QUERY_CHECKOUT } from "../utils/queries";
import { useLazyQuery } from "@apollo/client";
import Cart from "./Cart/Cart"

import { useQuery } from "@apollo/client";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { TOGGLE_CART, ADD_MULTIPLE_TO_CART } from "../utils/actions";
import { useStoreContext } from "../utils/GlobalState";

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
    color: "#FF007F",

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
  const [state, dispatch] = useStoreContext();

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
  const [getCheckout, { res }] = useLazyQuery(QUERY_CHECKOUT);

  function submitCheckout() {
    const productIds = [];

    state.cart.forEach((item) => {
      for (let i = 0; i < item.purchaseQuantity; i++) {
        productIds.push(item._id);
      }
    });

    getCheckout({
      variables: { products: productIds },
    });
  }
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
          <Link
            to="/"
            style={styles.navbar}
            // variant="primary"
            onClick={handleShow}
            className="btn btn-light bg-light m-1"
            type="button"
            id="cartBtn"
          >
            <img src={Image} style={styles.cartBtn} />
          </Link>
          {/* removed cart from here */}
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
                <Cart />
              </Offcanvas.Body>
            </Offcanvas>
          ))}
        </div>
      </div>
    </nav>
  );
};

export {styles};
export default Navbar;
