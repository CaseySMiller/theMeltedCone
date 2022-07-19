import React, { useEffect } from "react";
// import ProductItem from "../Products/ProductItem";
import { useStoreContext } from "../../utils/GlobalState";
// import { UPDATE_PRODUCTS } from "../../utils/actions";
import { ADD_TO_CART, UPDATE_CART_QUANTITY } from "../../utils/actions";

import { useQuery } from "@apollo/client";
import { QUERY_ALL_PRODUCTS } from "../../utils/queries";
import Image from "../../assets/images/scoop.png";
import { Link } from "react-router-dom";
import cartImg from "../../assets/images/add-cart.png";
import { idbPromise } from "../../utils/helpers";

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
    textDecoration: "none",
  },
  img: {
    height: "2.5rem",
    width: "2.5rem",
    invert: 1,
  },
};

function ProductList(item) {
  const [state, dispatch] = useStoreContext();

  const { flavor, _id, price, size } = item;
  const { cart } = state;

  const { loading, data } = useQuery(QUERY_ALL_PRODUCTS);

  const products = data?.products || [];

  console.log(products);
  const addToCart = () => {
    const itemInCart = cart.find((cartItem) => cartItem._id === _id);
    if (itemInCart) {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: _id,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
      });
      idbPromise("cart", "put", {
        ...itemInCart,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
      });
    } else {
      dispatch({
        type: ADD_TO_CART,
        product: { ...item, purchaseQuantity: 1 },
      });
      idbPromise("cart", "put", { ...item, purchaseQuantity: 1 });
    }
  };
  return (
    <div className="my-2">
      <h2></h2>
      {loading ? (
        <div>
          <h1 style={styles.flavorites}>
            All Sold Out... But don't worry, we will get our freezer stocked up
            in no time !
          </h1>
        </div>
      ) : (
        products.map((product) => (
          <div className="row p-2 justify-content-around">
            <div className="d-flex flex-column my-3 col-xl-3 col-lg-4 col-md-5 col-sm-6">
              <div
                style={styles.card}
                className="card align-items-center text-center p-3"
              >
                <img
                  style={styles.scoop}
                  src={Image}
                  className="card-img-top"
                />
                <div className="card-body">
                  <Link to={`/products/${product._id}`}>
                    <h5 className="card-title" style={styles.flavorites}>
                      {product.flavor}
                    </h5>
                  </Link>
                  <span>${product.price}</span>
                </div>

                <button
                  onClick={addToCart}
                  style={styles.img}
                  src={cartImg}
                  className="btn bg-secondary"
                ></button>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default ProductList;
