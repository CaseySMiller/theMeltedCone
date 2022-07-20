import React from "react";
// import Image from "../assets/images/scoop.png";
// import "../style.css";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_USER } from "../utils/queries";

const styles = {
  container: {
    backgroundColor: "#FFD6E8",
  },
  quote: {
    color: "black",
    fontFamily: "Syncopate",
    fontDisplay: "sans-serif",
    textAlign: "center",
  },
  scoop: {
    height: "2rem",
    width: "2rem",
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

export default function Profile() {
  const { data } = useQuery(QUERY_USER);
  let user;

  if (data) {
    user = data.user;
  }
console.log(user)
  return (
    <>
      <div className="container my-1">
        {user ? (
          <>
            <h2 style={styles.flavorites}>
              {user.firstName}'s PREVIOUS ORDERS
            </h2>
            <div className="row p-2 justify-content-around">
              {user.orders.map((order) => (
                <div key={order._id} className="my-2">
                  <h3>
                    {new Date(parseInt(order.purchaseDate)).toLocaleDateString()}
                  </h3>
                  <div className="flex-row" style={styles.quote}>
                    {order.products.map(({ _id, image, flavor, price }, index) => (
                      <div
                        key={index}
                        className="md-3 px-1 py-1"
                        style={styles.quote}
                      >
                        <Link to={`/products/${_id}`}>
                          <img style={styles.scoop} alt={flavor} src={`/assets/productimages/${image}`} />
                          <p>{flavor}</p>
                        </Link>
                        <div>
                          <span>${price}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : null}
      </div>
    </>
  );
}

// export default Profile;

{
  /* <h1 style={styles.quote}> YOUR FLAVORITES </h1>
      {/* card 5 */
}
{
  /* <div className="d-flex flex-column my-5 col-xl-3 col-lg-4 col-md-5 col-sm-6">
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
              This flavor was enjoyed in your previous order, click below to add
              to your current order so you can enjoy this flavor again
            </p>
          </div>
          <div className="card-body">
            <a className="card-link" style={styles.flavorites}>
              {" "}
              ORDER AGAIN?{" "}
            </a>
            <a className="card-link" style={styles.flavorites}>
              {" "}
              REMOVE FROM FLAVORITES?{" "}
            </a>
          </div>
        </div>
      </div> */
}
{
  /* card 6 */
}
{
  /* <div className="d-flex flex-column my-5 col-xl-3 col-lg-4 col-md-5 col-sm-6">
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
              This flavor was enjoyed in your previous order, click below to add
              to your current order so you can enjoy this flavor again
            </p>
          </div>
          <div className="card-body">
            <a className="card-link" style={styles.flavorites}>
              {" "}
              ORDER AGAIN?{" "}
            </a>
            <a className="card-link" style={styles.flavorites}>
              {" "}
              REMOVE FROM FLAVORITES?{" "}
            </a>
          </div>
        </div>
      </div> */
}
{
  /* card 7 */
}
{
  /* <div className="d-flex flex-column my-5 col-xl-3 col-lg-4 col-md-5 col-sm-6">
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
              This flavor was enjoyed in your previous order, click below to add
              to your current order so you can enjoy this flavor again
            </p>
          </div>
          <div className="card-body">
            <a className="card-link" style={styles.flavorites}>
              {" "}
              ORDER AGAIN?{" "}
            </a>
            <a className="card-link" style={styles.flavorites}>
              {" "}
              REMOVE FROM FLAVORITES?{" "}
            </a>
          </div>
        </div>
      </div>{" "} */
}
{
  /* card 8 */
}
{
  /* <div className="d-flex flex-column my-5 col-xl-3 col-lg-4 col-md-5 col-sm-6">
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
              This flavor was enjoyed in your previous order, click below to add
              to your current order so you can enjoy this flavor again
            </p>
          </div>
          <div className="card-body">
            <a className="card-link" style={styles.flavorites}>
              {" "}
              ORDER AGAIN?{" "}
            </a>
            <a className="card-link" style={styles.flavorites}>
              {" "}
              REMOVE FROM FLAVORITES?{" "}
            </a>
          </div>
        </div>
      </div>  */
}

// <div className="row p-5 justify-content-around" style={styles.container}>
//   <h1 style={styles.quote}> YOUR PAST ORDERS</h1>
//   {/* card 1 */}
//   <div className="d-flex flex-column my-5 col-xl-3 col-lg-4 col-md-5 col-sm-6">
//     <div
//       style={styles.card}
//       className="card align-items-center text-center"
//     >
//       <img style={styles.scoop} src={Image} className="card-img-top" />
//       <div className="card-body">
//         <h5 className="card-title" style={styles.flavorites}>
//           {" "}
//           ICE CREAM FLAVOR
//         </h5>
//         <p className="card-text">
//           This flavor was enjoyed in your previous order, click below to add
//           to your current order so you can enjoy this flavor again
//         </p>
//       </div>
//       <div className="card-body">
//         <a className="card-link" style={styles.flavorites}>
//           {" "}
//           ORDER AGAIN?{" "}
//         </a>
//       </div>
//     </div>
//   </div>
//   {/* card 2 */}
//   <div className="d-flex flex-column my-5 col-xl-3 col-lg-4 col-md-5 col-sm-6">
//     <div
//       style={styles.card}
//       className="card align-items-center text-center"
//     >
//       <img style={styles.scoop} src={Image} className="card-img-top" />
//       <div className="card-body">
//         <h5 className="card-title" style={styles.flavorites}>
//           {" "}
//           ICE CREAM FLAVOR
//         </h5>
//         <p className="card-text">
//           This flavor was enjoyed in your previous order, click below to add
//           to your current order so you can enjoy this flavor again
//         </p>
//       </div>
//       <div className="card-body">
//         <a className="card-link" style={styles.flavorites}>
//           {" "}
//           ORDER AGAIN?{" "}
//         </a>
//       </div>
//     </div>
//   </div>
//   {/* card 3 */}
//   <div className="d-flex flex-column my-5 col-xl-3 col-lg-4 col-md-5 col-sm-6">
//     <div
//       style={styles.card}
//       className="card align-items-center text-center"
//     >
//       <img style={styles.scoop} src={Image} className="card-img-top" />
//       <div className="card-body">
//         <h5 className="card-title" style={styles.flavorites}>
//           {" "}
//           ICE CREAM FLAVOR
//         </h5>
//         <p className="card-text">
//           This flavor was enjoyed in your previous order, click below to add
//           to your current order so you can enjoy this flavor again
//         </p>
//       </div>
//       <div className="card-body">
//         <a className="card-link" style={styles.flavorites}>
//           {" "}
//           ORDER AGAIN?{" "}
//         </a>
//       </div>
//     </div>
//   </div>
//   {/* card 4 */}
//   <div className="d-flex flex-column my-5 col-xl-3 col-lg-4 col-md-5 col-sm-6">
//     <div
//       style={styles.card}
//       className="card align-items-center text-center"
//     >
//       <img style={styles.scoop} src={Image} className="card-img-top" />
//       <div className="card-body">
//         <h5 className="card-title" style={styles.flavorites}>
//           {" "}
//           ICE CREAM FLAVOR
//         </h5>
//         <p className="card-text">
//           This flavor was enjoyed in your previous order, click below to add
//           to your current order so you can enjoy this flavor again
//         </p>
//       </div>
//       <div className="card-body">
//         <a className="card-link" style={styles.flavorites}>
//           {" "}
//           ORDER AGAIN?{" "}
//         </a>
//       </div>
//     </div>
//   </div>
