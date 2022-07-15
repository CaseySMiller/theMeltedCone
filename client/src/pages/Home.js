import React from "react";
// import "../style.css";
import Image from "../assets/images/main-pg-image.png";
import { Link } from "react-router-dom";
const styles = {
  container: {
    backgroundColor: "#FFD6E8",
  },
  img: {
    height: "35rem",
    width: "35rem",
    class: "center",
  },
  quote: {
    color: "white",
    fontFamily: "Syncopate",
    fontDisplay: "sans-serif",
    textAlign: "center",
  },
  span: {
    color: "#FF007F",
  },
  btn: {
    textDecoration: "none",
    color: "#FF007F",
  },
  flavorites: {
    marginTop: 45,
    color: "#FF007F",
    fontFamily: "Syncopate",
    fontDisplay: "sans-serif",
    textAlign: "center",
  },
};
export default function Home() {
  return (
    <div>
      <div className="d-flex flex-column text-center" style={styles.container}>
        <img
          src={Image}
          id="main-img"
          alt="main-img"
          style={styles.img}
          className="d-flex justify-content-center"
        ></img>
        <h3 style={styles.quote} className="p-5 align-items-center">
          " No need to pick <span style={styles.span}>flavorites </span>when it
          comes to ice cream,{" "}
          <Link style={styles.btn} to="/subsribe" className="btn-lg bg-white">
            {" "}
            SUBSCRIBE
          </Link>{" "}
          to The Melted Cone and make every day a
          <span style={styles.span}> SUNDAE! "</span>
        </h3>
      </div>

      <div>
        <h1 style={styles.flavorites}>FLAVORITES OF THE WEEK </h1>
      </div>
    </div>
  );
}
