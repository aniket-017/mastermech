// import { combineReducers, applyMiddleware } from "redux";
import { configureStore } from '@reduxjs/toolkit'
// import thunk from "redux-thunk";
// import { composeWithDevTools } from "redux-devtools-extension";
import { productDetailsReducer, productsReducer } from "./Services/Reducers/productReducer";
import { filterreducers } from './Services/Reducers/filterReducer';



// const reducer = combineReducers({
//   venues:productsReducer,
// });

// let initialState = {};

// const middleware = [thunk];

const store = configureStore({
  reducer:{
    products: productsReducer,
    productdetails: productDetailsReducer,
    filter: filterreducers
  },
    // {reducer},
    // initialState,
    // composeWithDevTools(applyMiddleware(...middleware))
  });

export default store;