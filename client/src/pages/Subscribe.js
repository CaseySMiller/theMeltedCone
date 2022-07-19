import React from "react";
import "../style.css";
import Image from "../assets/productimages/blackberry.jpg";
import { Link } from "react-router-dom";

const styles = {
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
  scoop: {
    height: "14rem",
    width: "15rem",
  },
  card: {
    maxWidth: "28rem",
  },
};
export default function Subscribe() {
  return (
    <div>
      <div className="justify-content-between align-items-center">
        <h3 style={styles.flavorites}>Subscribe Here</h3>{" "}
        <div className="row align-items-center">
          <div className="d-flex flex-column my-5 p-5 col-lg-4 col-md-5 col-sm-6 align-items-center">
            <div
              style={styles.card}
              className="card align-items-center text-center"
            >
              <img style={styles.scoop} src={Image} className="card-img-top" />
              <div className="card-body" style={styles.container}>
                <h5 className="card-title" style={styles.flavorites}>
                  {" "}
                  FEATURED FLAVORITE OF THE MONTH
                </h5>
                <h5 className="card-title" style={styles.flavorites}>
                  {" "}
                  JULY: BLACKBERRY
                </h5>
                <p className="card-text">
                  Hit subscribe below to become a conehead and have ice cream
                  delivered to your door every month. Easy peasy.
                </p>
              </div>
              <div className="card-body">
                <a className="card-link" style={styles.flavorites}>
                  {" "}
                  <Link
                    style={styles.btn}
                    to="/cart"
                    className="btn-lg bg-white"
                  >
                    {" "}
                    SUBSCRIBE
                  </Link>{" "}
                </a>
              </div>
            </div>
          </div>{" "}
          <div className="d-flex flex-column my-5 p-5 col-lg-4 col-md-5 col-sm-6 align-items-center">
            <div
              style={styles.card}
              className="card align-items-center text-center"
            >
              <img style={styles.scoop} src={Image} className="card-img-top" />
              <div className="card-body" style={styles.container}>
                <h5 className="card-title" style={styles.flavorites}>
                  {" "}
                  FEATURED FLAVORITE OF THE MONTH
                </h5>
                <h5 className="card-title" style={styles.flavorites}>
                  {" "}
                  JULY: BLACKBERRY
                </h5>
                <p className="card-text">
                  Hit subscribe below to become a conehead and have ice cream
                  delivered to your door every month. Easy peasy.
                </p>
              </div>
              <div className="card-body">
                <a className="card-link" style={styles.flavorites}>
                  {" "}
                  <Link
                    style={styles.btn}
                    to="/cart"
                    className="btn-lg bg-white"
                  >
                    {" "}
                    SUBSCRIBE
                  </Link>{" "}
                </a>
              </div>
            </div>
          </div>{" "}
          <div className="d-flex flex-column my-5 p-3 col-lg-4 col-md-5 col-sm-6 align-items-center">
            <div
              style={styles.card}
              className="card align-items-center text-center"
            >
              <img style={styles.scoop} src={Image} className="card-img-top" />
              <div className="card-body" style={styles.container}>
                <h5 className="card-title" style={styles.flavorites}>
                  {" "}
                  FEATURED FLAVORITE OF THE MONTH
                </h5>
                <h5 className="card-title" style={styles.flavorites}>
                  {" "}
                  JULY: BLACKBERRY
                </h5>
                <p className="card-text">
                  Hit subscribe below to become a conehead and have ice cream
                  delivered to your door every month. Easy peasy.
                </p>
              </div>
              <div className="card-body">
                <a className="card-link" style={styles.flavorites}>
                  {" "}
                  <Link
                    style={styles.btn}
                    to="/cart"
                    className="btn-lg bg-white"
                  >
                    {" "}
                    SUBSCRIBE
                  </Link>{" "}
                </a>
              </div>
            </div>
          </div>{" "}
        </div>
      </div>
    </div>
  );
}
