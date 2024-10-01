import { configureStore } from "@reduxjs/toolkit";
import { productsApi } from "../features/productsApi.js";
import cartReducer from "../features/cartSlice.js";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
