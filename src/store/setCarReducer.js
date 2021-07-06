import {
  createReducer,
  createAsyncThunk,
} from "@reduxjs/toolkit";
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



const SetCartReducer = createReducer(
  {},
  {
    [setCart.fulfilled]: (state, action) => action.payload,
  }
);

export default SetCartReducer;
