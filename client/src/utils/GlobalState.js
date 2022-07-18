import React, { createContext, useContext } from "react";
import { useProductReducer } from "./reducers";

const StoreContext = createContext();
const { Provider } = StoreContext;

const StoreProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useProductReducer({
    products: [],
    cart: [],
    cartOpen: false,
  });

  return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
  // console.log(StoreContext);
  return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };
