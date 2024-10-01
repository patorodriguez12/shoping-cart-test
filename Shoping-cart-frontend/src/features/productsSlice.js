import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  status: null,
};

const productSlice = createSlice({
  name: "Products",
  initialState,
  reducers: {},
});

export default productSlice.reducer;
