import React from "react";
import { Link } from "react-router-dom";
import Image from "../assets/images/main-pg-image.png";

const styles = {
  container: {
    backgroundColor: "#FFD6E8",
    backgroundImage: `url(${Image})`,
    backgroundRepeat: "no-repeat",
    textAlign: "center",
    backgroundSize: "30%",
    alignItems: "center",
    backgroundPosition: "center",
  },
  cardContainer: {
    backgroundColor: "rgba(255, 255, 255, 0.27)",
    border: "none",
  },
  scoop: {
    height: "14rem",
    width: "15rem",
  },
  quote: {
    color: "white",
    fontFamily: "Syncopate",
    fontDisplay: "sans-serif",
    textAlign: "center",
    fontSize: 44,
  },
  span: {
    color: "#FF007F",
  },
  btn: {
    textDecoration: "none",
    color: "#FF007F",
  },
  flavorites: {
    marginTop: 65,
    color: "#FF007F",
    fontFamily: "Syncopate",
    fontDisplay: "sans-serif",
    textAlign: "center",
  },
  card: {
    maxWidth: "25rem",
    minWidth: "25rem",
  },
  details: {
    fontFamily: "Syncopate",
    fontDisplay: "sans-serif",
    color: "rgb(69,69,69)",
  },
};
export default function Home() {
  return (
    <div>
      <div className="row p-5" style={styles.container}>
        <div
          className=" card d-flex flex-column align-items-center p-5"
          style={styles.cardContainer}
        >
          <h3 style={styles.quote} className="p-5 align-items-center">
            " No need to pick <span style={styles.span}>flavorites </span>when
            it comes to ice cream,{" "}
            <Link style={styles.btn} to="/subscribe" className="btn bg-white">
              {" "}
              SUBSCRIBE
            </Link>{" "}
            to The Melted Cone and make every day a
            <span style={styles.span}> SUNDAE! "</span>
          </h3>
        </div>
      </div>
      <div>
        <div className="justify-content-between align-items-center">
          <h2 style={styles.flavorites}> featured flavorites of the week </h2>
        </div>
        {/* CARDS */}
        <div className="row align-items-center">
          {/* CARD 1 */}
          <div className="d-flex flex-column my-5 col-lg-4 col-md-5 col-sm-6 align-items-center">
            <div
              style={styles.card}
              className="card align-items-center text-center"
            >
              <img
                style={styles.scoop}
                src="/assets/productimages/strawberry.jpg"
                className="card-img-top"
              />
              <div className="card-body">
                <h3 className="card-title" style={styles.flavorites}>
                  {" "}
                  strawberry
                </h3>
                <h6 className="card-title" style={styles.details}>
                  {" "}
                  The perfect summer flavor
                </h6>
                <p className="card-text">
                  The perfect summer flavor
                  <p>Easy peasy.</p>
                </p>
              </div>
              <div className="card-body">
                <a className="card-link" style={styles.flavorites}>
                  {" "}
                  <Link
                    style={styles.details}
                    to="/order"
                    className="btn bg-white"
                  >
                    {" "}
                    Browse our freezer
                  </Link>{" "}
                </a>
              </div>
            </div>
          </div>{" "}
          <div className="d-flex flex-column my-5 p-0 col-lg-4 col-md-5 col-sm-6 align-items-center">
            <div
              style={styles.card}
              className="card align-items-center text-center"
            >
              <img
                style={styles.scoop}
                src="/assets/productimages/Chocolate.jpg"
                className="card-img-top"
              />
              <div className="card-body">
                <h3 className="card-title" style={styles.flavorites}>
                  {" "}
                  chocolate
                </h3>
                <h6 className="card-title" style={styles.details}>
                  {" "}
                  rich goodness.
                </h6>
                <p className="card-text">
                  The perfect summer flavor
                  <p>Easy peasy.</p>
                </p>
              </div>
              <div className="card-body">
                <a className="card-link" style={styles.flavorites}>
                  {" "}
                  <Link
                    style={styles.details}
                    to="/order"
                    className="btn bg-white"
                  >
                    {" "}
                    Browse our freezer
                  </Link>{" "}
                </a>
              </div>
            </div>
          </div>{" "}
          <div className="d-flex flex-column my-5 p-0 col-lg-4 col-md-5 col-sm-6 align-items-center">
            <div
              style={styles.card}
              className="card align-items-center text-center"
            >
              <img
                style={styles.scoop}
                src="/assets/productimages/vanilla.jpg"
                className="card-img-top"
              />
              <div className="card-body">
                <h3 className="card-title" style={styles.flavorites}>
                  {" "}
                  vanilla
                </h3>
                <h6 className="card-title" style={styles.details}>
                  {" "}
                  it's classic for a reason
                </h6>
                <p className="card-text">
                  The perfect summer flavor
                  <p>Easy peasy.</p>
                </p>
              </div>
              <div className="card-body">
                <a className="card-link" style={styles.flavorites}>
                  {" "}
                  <Link
                    style={styles.details}
                    to="/order"
                    className="btn bg-white"
                  >
                    {" "}
                    Browse our freezer
                  </Link>{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
