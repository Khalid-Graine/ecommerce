// src/app/store.js

import { configureStore } from "@reduxjs/toolkit";
import currencyReducer from "./reducers/currencyReducer";

export const store = configureStore({
  reducer: {
    currency: currencyReducer,
  },
});
export default store;
