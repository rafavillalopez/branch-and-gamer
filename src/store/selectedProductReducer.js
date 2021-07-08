import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { getValoration } from "./valorationsReducer";

export const setSelectedProduct = createAsyncThunk(
  "SET_SELECTED_PRODUCT",
  async (data, thunkAPI) => {
    try {
      const { token } = thunkAPI.getState();

      const req = await axios.get(`/api/products/${data}`, {
        headers: { authorization: token },
      });

      thunkAPI.dispatch(getValoration(data));

      console.log("REQ:DATA", req.data);
      
      return req.data;
    } catch (err) {
      throw err;
    }
  }
);
const selectedProductReducer = createReducer(
  {},
  {
    [setSelectedProduct.fulfilled]: (state, action) => action.payload,
  }
);

export default selectedProductReducer;
