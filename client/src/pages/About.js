import React from "react";
import "../style.css";

const styles = {
  container: {
    backgroundColor: "#FFD6E8",
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
    <div className="row p-5 justify-content-around" style={styles.container}>
      <div>
        <h3 style={styles.flavorites}>
          Make life even sweeter here at the Melted Cone. Subscribe and cool off
          with a sweet treat delivered right to your door.
        </h3>
        <h3 style={styles.flavorites}>
          Regardless of the weather, ice cream is the perfect treat for any
          occassion and with us you can try new flavors without the hassle.
          Share with your family or eat it yourself (we dont judge!)
        </h3>
      </div>
    </div>
  );
}
