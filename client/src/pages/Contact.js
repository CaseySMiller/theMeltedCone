import React from "react";
import "../style.css";

const styles = {
  container: {
    backgroundColor: "#FFD6E8",
  },
  quote: {
    color: "grey",
    fontFamily: "Syncopate",
    fontDisplay: "sans-serif",
    textAlign: "center",
  },
  span: {
    color: "#FF007F",
    fontFamily: "Syncopate",
    fontDisplay: "sans-serif",
    textAlign: "center",
  },

  flavorites: {
    marginTop: 45,
    color: "#FF007F",
    fontFamily: "Syncopate",
    fontDisplay: "sans-serif",
    textAlign: "center",
    lineSpacing: 3,
  },
  email: {
    color: "grey",
    fontFamily: "Syncopate",
    fontDisplay: "sans-serif",
  },
};

export default function Contact() {
  return (
    <div className="p-5">
      <h3 style={styles.flavorites}>
        Have Questions or just wish to connect with our team?
        <br></br>
        <h3>Please contact us, We'd love to hear from you!</h3>
        {/* Please fill outthe fields below and we will be in touch as soon as we can! */}
      </h3>
      <div
        className="d-flex flex-column align-items-center"
        style={styles.container}
      >
        <br></br>
        <div style={styles.container}>
          <h4 style={styles.span}> We are located at: </h4>
          <p style={styles.quote}> 987 Melted Cone Way </p>
          <p style={styles.quote}> Denver, CO 80123 </p>
          <h4 style={styles.span}> Phone </h4>
          <p style={styles.quote}> 303.555.9876 </p>
          <h4 style={styles.span}> Email </h4>
          <p style={styles.quote}>
            {" "}
            <a style={styles.email} href="mailto:themeltedcone@gmail.com">
              themeltedcone@gmail.com
            </a>{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
