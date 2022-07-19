import React, { useEffect } from "react";
import ProductItem from "../Products/ProductItem";
import { useStoreContext } from "../../utils/GlobalState";
// import { UPDATE_PRODUCTS } from "../../utils/actions";

import { useQuery } from "@apollo/client";
import { QUERY_ALL_PRODUCTS } from "../../utils/queries";
// import { idbPromise } from "../../utils/helpers";

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
          <ProductItem
            key={product._id}
            _id={product._id}
            // image={product.image}
            flavor={product.flavor}
            price={product.price}
            // quantity={product.quantity}
          />
        ))
      )}
    </div>
  );
}

export default ProductList;
