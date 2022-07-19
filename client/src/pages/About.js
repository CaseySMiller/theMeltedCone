import React from "react";
import "../style.css";
import { Link } from "react-router-dom";

const styles = {
  container: {
    backgroundColor: "#FFD6E8",
    borderRadius: 2,
  },
  img: {
    height: "35rem",
    width: "35rem",
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
export default function About() {
  return (
    <div className="p-5">
      <h3 style={styles.flavorites}></h3>
      <div className="row p-5 justify-content-around" style={styles.container}>
        <div style={styles.quote}>
          <h3>
            Make life even sweeter here at{" "}
            <h3>
              <span style={styles.span}>the Melted Cone</span>.
            </h3>
            <h3>
              <br></br>{" "}
              <Link style={styles.btn} to="/subscribe" className="btn bg-white">
                {" "}
                SUBSCRIBE
              </Link>{" "}
              and cool off with a sweet treat delivered{" "}
              <h3>
                <span style={styles.span}>right to your door</span>.
              </h3>
            </h3>
          </h3>
          <br></br>
          <h3>
            Regardless of the weather,
            <h3>
              ice cream is the perfect treat for any occassion.
              <h3>
                you can try <span style={styles.span}>new flavors</span> at the
                Melted Cone
                <h3>
                  {" "}
                  <span style={styles.span}>without the hassle</span>.
                </h3>
                <h3>
                  Share with your family or eat it yourself
                  <h3>
                    <span style={styles.span}>(we dont judge!)</span>
                  </h3>
                </h3>
              </h3>
            </h3>
          </h3>
        </div>
      </div>
    </div>
  );
}
