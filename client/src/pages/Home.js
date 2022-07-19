import React from "react";
// import "../style.css";
import Image from "../assets/images/main-pg-image.png";
import { Link } from "react-router-dom";
import ProductList from "../components/Products/ProductList";
import Image1 from "../assets/productimages/strawberry.jpg";
import Image2 from "../assets/productimages/chocolate.jpg";
import Image3 from "../assets/productimages/vanilla.jpg";

const styles = {
  container: {
    backgroundColor: "#FFD6E8",
    backgroundImage: `url(${Image})`,
    backgroundRepeat: "no-repeat",
    // textAlign: "center",
    alignItems: "center",
  },
  cardContainer: {
    backgroundColor: "#FFD6E8",
  },
  img: {
    // position: "relative",
    height: "35rem",
    width: "35rem",
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
  card: {
    maxWidth: "28rem",
  },
};
export default function Home() {
  return (
    <div className="row p-5" style={styles.container}>
      <div className="d-flex flex-column align-items-center">
        <h3 style={styles.quote} className="p-5 align-items-center">
          " No need to pick <span style={styles.span}>flavorites </span>when it
          comes to ice cream,{" "}
          <Link style={styles.btn} to="/subscribe" className="btn-lg bg-white">
            {" "}
            SUBSCRIBE
          </Link>{" "}
          to The Melted Cone and make every day a
          <span style={styles.span}> SUNDAE! "</span>
        </h3>
      </div>

      <div>
        <div className="justify-content-between align-items-center">
          <h1 style={styles.flavorites}> OUR FLAVORITES OF THE WEEK </h1>
        </div>

        <div className="justify-content-between align-items-center">
          <div className="row align-items-center">
            <div className="d-flex flex-column my-5 p-5 col-lg-4 col-md-5 col-sm-6 align-items-center">
              <div
                style={styles.card}
                className="card align-items-center text-center"
              >
                <img
                  style={styles.scoop}
                  src={Image1}
                  className="card-img-top"
                />
                <div className="card-body" style={styles.cardcontainer}>
                  <h5 className="card-title" style={styles.flavorites}>
                    {" "}
                    Strawberry
                  </h5>
                  <p className="card-text">
                    Hit add to cart and enjoy this tasty treat in the comforts
                    of your own home.
                    <p>Easy peasy.</p>
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
                      Add to Cart
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
                <img
                  style={styles.scoop}
                  src={Image2}
                  className="card-img-top"
                />
                <div className="card-body" style={styles.cardcontainer}>
                  <h5 className="card-title" style={styles.flavorites}>
                    {" "}
                    Chocolate
                  </h5>
                  <p className="card-text">
                    Hit add to cart and enjoy this tasty treat in the comforts
                    of your own home.
                    <p>Easy peasy.</p>
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
                      Add to Cart
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
                <img
                  style={styles.scoop}
                  src={Image3}
                  className="card-img-top"
                />
                <div className="card-body" style={styles.cardcontainer}>
                  <h5 className="card-title" style={styles.flavorites}>
                    {" "}
                    Vanilla
                  </h5>
                  <p className="card-text">
                    Hit add to cart and enjoy this tasty treat in the comforts
                    of your own home.
                    <p>Easy peasy.</p>
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
                      Add to Cart
                    </Link>{" "}
                  </a>
                </div>
              </div>
            </div>{" "}
          </div>
        </div>

        {/* <div className="d-flex flex-column my-5 p-5 col-lg-4 col-md-5 col-sm-6 align-items-center"> */}
        {/* <div
            style={styles.card}
            className="card align-items-center text-center"
          >
            
          {/* </div> */}
        {/* </div> */}

        {/* <div className="row align-items-center ">
        <div className="d-flex flex-column my-5 p-5 col-lg-4 col-md-5 col-sm-6 align-items-center">
          <div
            style={styles.card}
            className="card align-items-center text-center"
          ></div>
        </div>
        <ProductList />
      </div> */}
      </div>
    </div>
  );
}
