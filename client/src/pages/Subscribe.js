import React from "react";
import "../style.css";

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
};
export default function Subscribe() {
  return (
    <div>
      <div>
        <h3 style={styles.flavorites}>Subscribe Here</h3>
      </div>
    </div>
  );
}
