import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import App from "./App.jsx";
import NavBar from "./components/NavBar.jsx";
import "./index.css";

import { configureStore } from "@reduxjs/toolkit";
import { productsApi } from "./features/productsApi.js";

const store = configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
  devTools: process.env.NODE_ENV !== "production",
});

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <StrictMode>
      <BrowserRouter>
        <NavBar />
        <App />
      </BrowserRouter>
    </StrictMode>
  </Provider>
);
