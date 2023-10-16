import React from "react";
import ReactDOM from "react-dom/client";
// import { Provider } from "react-redux";
// import { combineReducers, createStore } from "redux";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App";
import configureProductStore from "./hook-store/products-store";
// import productReducer from "./store/reducers/products";
// import ProductsContextProvider from "./context/products-context";

// const rootReducer = combineReducers({
//   shop: productReducer,
// });

// const store = createStore(rootReducer);

configureProductStore()

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <ProductsContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  // </ProductsContextProvider>
);
