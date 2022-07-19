import React, { useEffect } from "react";
// import ProductItem from "../Products/ProductItem";
// import { useStoreContext } from "../../utils/GlobalState";
// import { UPDATE_PRODUCTS } from "../../utils/actions";
import { useQuery } from "@apollo/client";
import { QUERY_ALL_PRODUCTS } from "../../utils/queries";
import Image from "../../assets/images/scoop.png";

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
  },
};
function ProductList() {
  const { loading, data } = useQuery(QUERY_ALL_PRODUCTS);

  const products = data?.products || [];

  console.log(products);
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
          <div className="row p-5 justify-content-around">
            <div className="d-flex flex-column my-5 col-xl-3 col-lg-4 col-md-5 col-sm-6">
              <div
                style={styles.card}
                className="card align-items-center text-center"
              >
                <img
                  style={styles.scoop}
                  src={Image}
                  className="card-img-top"
                />
                <div className="card-body">
                  <h5 className="card-title" style={styles.flavorites}>
                    {product.flavor}
                  </h5>
                </div>
              </div>
            </div>
          </div>
        ))
      )}

      {/* {state.products.length ? (
        <div className="flex-row">
          {filterProducts().map((product) => (
            <ProductItem
              // key={product._id}
              _id={product._id}
              // image={product.image}
              flavor={product.flavor}
              price={product.price}
              size={product.size}
            />
          ))}
        </div>
      ) : (
        <h3>You haven't added any products yet!</h3>
      )} */}
    </div>
  );
}

export default ProductList;
