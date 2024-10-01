import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const URL = "http://localhost:3001/";

const initialState = {
  items: [],
  status: null,
  error: null,
};

export const productsFetch = createAsyncThunk(
  "products/productsFetch",
  async (id = null, { rejectWithValue }) => {
    try {
      const response = await axios.get(URL + "products");
      return response?.data;
    } catch (error) {
      return rejectWithValue(error.response.data || "An error occurred");
    }
  }
);

const productSlice = createSlice({
  name: "Products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(productsFetch.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(productsFetch.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
        state.error = null;
      })
      .addCase(productsFetch.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.payload || "Failed to fetch products";
      });
  },
});

export default productSlice.reducer;
