import { createReducer, createAsyncThunk, createAction } from "@reduxjs/toolkit";
import axios from "axios";

export const setCart = createAsyncThunk("SET_CART", async (data, thunkAPI) => {
  try {
    const { id, token } = data;

    const req = await axios.post(`/api/cart/${id}`, {
      headers: { authorization: token },
    });

    return req.data;
  } catch (err) {
    throw err;
  }
});

export const setCartVoid = createAction("AbadaKedabra")

const SetCartReducer = createReducer({}, {
  [setCart.fulfilled]: (state, action) => action.payload,
  [setCartVoid]: (state, action) => {}
});

export default SetCartReducer;
