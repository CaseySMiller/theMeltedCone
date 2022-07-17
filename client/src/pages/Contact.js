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

export default function Contact() {
  return (
    <div>
      <div
        className="d-flex flex-column align-items-center"
        style={styles.container}
      >
        <h3 style={styles.quote}>
          Have Questions, or just wish to connect with our team? Please contact
          us, We'd love to hear from you!
          {/* Please fill outthe fields below and we will be in touch as soon as we can! */}
        </h3>

        <div style={styles.container}>
          <h4 style={styles.quote}> We are located at: </h4>
          <p style={styles.quote}> 987 Melted Cone Way </p>
          <p style={styles.quote}> Denver, CO 80123 </p>
          <h4 style={styles.quote}> Phone </h4>
          <p style={styles.quote}> 303..555.9876 </p>
          <h4 style={styles.quote}> Email </h4>
          <p style={styles.quote}> themeltedcone@email.com </p>
        </div>
      </div>
    </div>
  );
}
