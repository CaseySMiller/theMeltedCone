import React from "react";
import { Link } from "react-router-dom";
import { pluralize } from "../../utils/helpers";
import { useStoreContext } from "../../utils/GlobalState";
import { ADD_TO_CART, UPDATE_CART_QUANTITY } from "../../utils/actions";
import { idbPromise } from "../../utils/helpers";
import cartImg from "../../assets/images/add-cart.png";
import Image from "../../assets/images/scoop.png";

const styles = {
  flavorites: {
    marginTop: 45,
    color: "#FF007F",
    fontFamily: "Syncopate",
    fontDisplay: "sans-serif",
    textAlign: "center",
  },
  scoop: {
    height: "14rem",
    width: "15rem",
  },
  price: {
    fontFamily: "Syncopate",
    fontDisplay: "sans-serif",
  },
  cartBtn: {
    color: "#f9a6ca",
    fontFamily: "Syncopate",
    fontDisplay: "sans-serif",
    textAlign: "center",
  },
};

function ProductItem(item) {
  const [state, dispatch] = useStoreContext();

  const {
    flavor,
    _id,
    price,
    image,
    size,
    // quantity
  } = item;

  const { cart } = state;

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

  const productImage = `/assets/productimages/${image}`;

  return (
    <div className="d-flex flex-column my-3 col-xl-3 col-lg-4 col-md-5 col-sm-6">
      <div
        style={styles.card}
        className="card align-items-center text-center p-3"
      >
        {productImage ? (
          <img
            style={styles.scoop}
            className="card-img-top"
            src={productImage}
          />
        ) : (
          <img style={styles.scoop} className="card-img-top" src={Image} />
        )}

        <div className="card-body">
          {/* <Link to={`/products/${_id}`}> */}
          <h5 className="card-title" style={styles.flavorites}>
            {flavor}
          </h5>
          {/* </Link> */}
          <span style={styles.price}>${price}</span>
          <span>{size}</span>
        </div>

        <button
          onClick={addToCart}
          style={styles.cartBtn}
          className="btn btn-outline-secondary"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductItem;
