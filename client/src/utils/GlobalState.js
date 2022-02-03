import React from "react";
// import { useProductReducer } from './reducers'
import { Provider } from "react-redux"
import store from "./store";

// const StoreContext = createContext();
// const { Provider } = StoreContext;

const StoreProvider = (props) => {
  // const [state, dispatch] = useProductReducer({
  //   products: [],
  //   cart: [],
  //   cartOpen: false,
  //   categories: [],
  //   currentCategory: '',
  // });

  return <Provider store={store} {...props } />;
};

// const useStoreContext = () => {
//   return useContext(StoreContext);
// };

export { StoreProvider};
