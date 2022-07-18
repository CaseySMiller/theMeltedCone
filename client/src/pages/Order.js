import React from "react";
import "../style.css";
import Image from "../assets/images/scoop.png";
const styles = {
  scoop: {
    height: "14rem",
    width: "15rem",
  },
  card: {
    maxWidth: "28rem",
  },
  flavorites: {
    marginTop: 45,
    color: "#FF007F",
    fontFamily: "Syncopate",
    fontDisplay: "sans-serif",
    textAlign: "center",
  },
};
export default function Order() {
  return (
    <div className="row p-5 justify-content-around">
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
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
          <div class="col-md-3 col-lg-3 col-xl-2 d-flex">
            <button
              class="btn btn-link px-2"
              onclick="this.parentNode.querySelector('input[type=number]').stepDown()"
            >
              <i class="fas fa-minus"></i>
            </button>

            <input
              id="form1"
              min="0"
              name="quantity"
              value="1"
              type="number"
              class="form-control form-control-sm"
            />

            <button
              class="btn btn-link px-2"
              onclick="this.parentNode.querySelector('input[type=number]').stepUp()"
            >
              <i class="fas fa-plus"></i>
            </button>
          </div>
          <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
            <h6 class="mb-0">€ 44.00</h6>
          </div>
          <div className="card-body">
            <a className="card-link" style={styles.flavorites}>
              Card link
            </a>
            <a className="card-link" style={styles.flavorites}>
              Another link
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
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">An item</li>
            <li className="list-group-item">A second item</li>
            <li className="list-group-item">A third item</li>
          </ul>
          <div className="card-body">
            <a className="card-link" style={styles.flavorites}>
              Card link
            </a>
            <a className="card-link" style={styles.flavorites}>
              Another link
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
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">An item</li>
            <li className="list-group-item">A second item</li>
            <li className="list-group-item">A third item</li>
          </ul>
          <div className="card-body">
            <a className="card-link" style={styles.flavorites}>
              Card link
            </a>
            <a className="card-link" style={styles.flavorites}>
              Another link
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
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">An item</li>
            <li className="list-group-item">A second item</li>
            <li className="list-group-item">A third item</li>
          </ul>
          <div className="card-body">
            <a className="card-link" style={styles.flavorites}>
              Card link
            </a>
            <a className="card-link" style={styles.flavorites}>
              Another link
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
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">An item</li>
            <li className="list-group-item">A second item</li>
            <li className="list-group-item">A third item</li>
          </ul>
          <div className="card-body">
            <a className="card-link" style={styles.flavorites}>
              Card link
            </a>
            <a className="card-link" style={styles.flavorites}>
              Another link
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
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">An item</li>
            <li className="list-group-item">A second item</li>
            <li className="list-group-item">A third item</li>
          </ul>
          <div className="card-body">
            <a className="card-link" style={styles.flavorites}>
              Card link
            </a>
            <a className="card-link" style={styles.flavorites}>
              Another link
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
