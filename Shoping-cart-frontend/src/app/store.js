import { configureStore } from "@reduxjs/toolkit";
import { productsApi } from "../features/productsApi.js";
import cartReducer from "../features/cartSlice.js";
import authReducer from "../features/authSlice.js";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    auth: authReducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
