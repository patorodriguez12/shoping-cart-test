import { configureStore } from "@reduxjs/toolkit";
import { productsApi } from "../features/productsApi"; // Importa productsApi correctamente

const store = configureStore({
  reducer: {
    // Solo incluye el reducer de productsApi
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware), // Asegúrate de concatenar el middleware de productsApi
});

export default store;
