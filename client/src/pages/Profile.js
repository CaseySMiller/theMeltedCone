import React from "react";
import Image from "../assets/images/scoop.png";
// import "../style.css";
const styles = {
  scoop: {
    height: "14rem",
    width: "15rem",
  },
  quote: {
    color: "white",
    fontFamily: "Syncopate",
    fontDisplay: "sans-serif",
    textAlign: "center",
  },
  card: {
    maxWidth: "28rem",
  },
  container: {
    backgroundColor: "#FFD6E8",
  },
  flavorites: {
    marginTop: 45,
    color: "#FF007F",
    fontFamily: "Syncopate",
    fontDisplay: "sans-serif",
    textAlign: "center",
  },
};

export default function Profile() {
  return (
    <div className="row p-5 justify-content-around" style={styles.container}>
      <h1 style={styles.quote}> YOUR PAST ORDERS</h1>
      {/* card 1 */}
      <div className="d-flex flex-column my-5 col-xl-3 col-lg-4 col-md-5 col-sm-6">
        <div
          style={styles.card}
          className="card align-items-center text-center"
        >
          <img style={styles.scoop} src={Image} className="card-img-top" />
          <div className="card-body">
            <h5 className="card-title" style={styles.flavorites}>
              {" "}
              ICE CREAM FLAVOR
            </h5>
            <p className="card-text">
              This flavor was enjoyed in your previous order, click below to add
              to your current order so you can enjoy this flavor again
            </p>
          </div>
          <div className="card-body">
            <a className="card-link" style={styles.flavorites}>
              {" "}
              ORDER AGAIN?{" "}
            </a>
          </div>
        </div>
      </div>
      {/* card 2 */}
      <div className="d-flex flex-column my-5 col-xl-3 col-lg-4 col-md-5 col-sm-6">
        <div
          style={styles.card}
          className="card align-items-center text-center"
        >
          <img style={styles.scoop} src={Image} className="card-img-top" />
          <div className="card-body">
            <h5 className="card-title" style={styles.flavorites}>
              {" "}
              ICE CREAM FLAVOR
            </h5>
            <p className="card-text">
              This flavor was enjoyed in your previous order, click below to add
              to your current order so you can enjoy this flavor again
            </p>
          </div>
          <div className="card-body">
            <a className="card-link" style={styles.flavorites}>
              {" "}
              ORDER AGAIN?{" "}
            </a>
          </div>
        </div>
      </div>
      {/* card 3 */}
      <div className="d-flex flex-column my-5 col-xl-3 col-lg-4 col-md-5 col-sm-6">
        <div
          style={styles.card}
          className="card align-items-center text-center"
        >
          <img style={styles.scoop} src={Image} className="card-img-top" />
          <div className="card-body">
            <h5 className="card-title" style={styles.flavorites}>
              {" "}
              ICE CREAM FLAVOR
            </h5>
            <p className="card-text">
              This flavor was enjoyed in your previous order, click below to add
              to your current order so you can enjoy this flavor again
            </p>
          </div>
          <div className="card-body">
            <a className="card-link" style={styles.flavorites}>
              {" "}
              ORDER AGAIN?{" "}
            </a>
          </div>
        </div>
      </div>
      {/* card 4 */}
      <div className="d-flex flex-column my-5 col-xl-3 col-lg-4 col-md-5 col-sm-6">
        <div
          style={styles.card}
          className="card align-items-center text-center"
        >
          <img style={styles.scoop} src={Image} className="card-img-top" />
          <div className="card-body">
            <h5 className="card-title" style={styles.flavorites}>
              {" "}
              ICE CREAM FLAVOR
            </h5>
            <p className="card-text">
              This flavor was enjoyed in your previous order, click below to add
              to your current order so you can enjoy this flavor again
            </p>
          </div>
          <div className="card-body">
            <a className="card-link" style={styles.flavorites}>
              {" "}
              ORDER AGAIN?{" "}
            </a>
          </div>
        </div>
      </div>
      <h1 style={styles.quote}> YOUR FLAVORITES </h1>
      {/* card 5 */}
      <div className="d-flex flex-column my-5 col-xl-3 col-lg-4 col-md-5 col-sm-6">
        <div
          style={styles.card}
          className="card align-items-center text-center"
        >
          <img style={styles.scoop} src={Image} className="card-img-top" />
          <div className="card-body">
            <h5 className="card-title" style={styles.flavorites}>
              {" "}
              ICE CREAM FLAVOR
            </h5>
            <p className="card-text">
              This flavor was enjoyed in your previous order, click below to add
              to your current order so you can enjoy this flavor again
            </p>
          </div>
          <div className="card-body">
            <a className="card-link" style={styles.flavorites}>
              {" "}
              ORDER AGAIN?{" "}
            </a>
            <a className="card-link" style={styles.flavorites}>
              {" "}
              REMOVE FROM FLAVORITES?{" "}
            </a>
          </div>
        </div>
      </div>
      {/* card 6 */}
      <div className="d-flex flex-column my-5 col-xl-3 col-lg-4 col-md-5 col-sm-6">
        <div
          style={styles.card}
          className="card align-items-center text-center"
        >
          <img style={styles.scoop} src={Image} className="card-img-top" />
          <div className="card-body">
            <h5 className="card-title" style={styles.flavorites}>
              {" "}
              ICE CREAM FLAVOR
            </h5>
            <p className="card-text">
              This flavor was enjoyed in your previous order, click below to add
              to your current order so you can enjoy this flavor again
            </p>
          </div>
          <div className="card-body">
            <a className="card-link" style={styles.flavorites}>
              {" "}
              ORDER AGAIN?{" "}
            </a>
            <a className="card-link" style={styles.flavorites}>
              {" "}
              REMOVE FROM FLAVORITES?{" "}
            </a>
          </div>
        </div>
      </div>
      {/* card 7 */}
      <div className="d-flex flex-column my-5 col-xl-3 col-lg-4 col-md-5 col-sm-6">
        <div
          style={styles.card}
          className="card align-items-center text-center"
        >
          <img style={styles.scoop} src={Image} className="card-img-top" />
          <div className="card-body">
            <h5 className="card-title" style={styles.flavorites}>
              {" "}
              ICE CREAM FLAVOR
            </h5>
            <p className="card-text">
              This flavor was enjoyed in your previous order, click below to add
              to your current order so you can enjoy this flavor again
            </p>
          </div>
          <div className="card-body">
            <a className="card-link" style={styles.flavorites}>
              {" "}
              ORDER AGAIN?{" "}
            </a>
            <a className="card-link" style={styles.flavorites}>
              {" "}
              REMOVE FROM FLAVORITES?{" "}
            </a>
          </div>
        </div>
      </div>{" "}
      {/* card 8 */}
      <div className="d-flex flex-column my-5 col-xl-3 col-lg-4 col-md-5 col-sm-6">
        <div
          style={styles.card}
          className="card align-items-center text-center"
        >
          <img style={styles.scoop} src={Image} className="card-img-top" />
          <div className="card-body">
            <h5 className="card-title" style={styles.flavorites}>
              {" "}
              ICE CREAM FLAVOR
            </h5>
            <p className="card-text">
              This flavor was enjoyed in your previous order, click below to add
              to your current order so you can enjoy this flavor again
            </p>
          </div>
          <div className="card-body">
            <a className="card-link" style={styles.flavorites}>
              {" "}
              ORDER AGAIN?{" "}
            </a>
            <a className="card-link" style={styles.flavorites}>
              {" "}
              REMOVE FROM FLAVORITES?{" "}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
