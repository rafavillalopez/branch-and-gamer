import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";

export const addItem = createAsyncThunk(
  "ADD_ITEM",
  async (data, thunkAPI) => {


  }
);

const cartReducer = createReducer(false, {
  [addItem]: (state, action) => true,
});

export default cartReducer;


