import React from "react";
// import "../style.css";
import Image from "../assets/images/main-pg-image.png";
export default function Home() {
  return (
    <div>
      <div>
        <img src={Image} id="main-img" alt="main-img"></img>
        <h3>
          No need to pick flavorites when it comes to ice cream, SUBSCRIBE to
          The Melted Cone and make every day a SUNDAE
        </h3>
      </div>

      <div>
        <h1>FLAVORITES OF THE WEEK </h1>
      </div>
    </div>
  );
}
