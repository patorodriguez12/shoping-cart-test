import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import App from "./App.jsx";
import NavBar from "./components/NavBar.jsx";
import "./index.css";
import store from "./app/store.js";
import { productsFetch } from "./features/productsSlice.js";

store.dispatch(productsFetch())

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
