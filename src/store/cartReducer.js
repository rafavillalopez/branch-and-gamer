import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const addItem = createAsyncThunk("ADD_ITEM", async (data, thunkAPI) => {
  try {
    const { token, cartInUse } = thunkAPI.getState();

    const body = {
      carritoId: cartInUse.id,
      productId: data.id,
    };

    const req = await axios.post("/api/cart/add", body, {
      headers: { authorization: token },
    });

    const { id, quantity } = req.data;

    return { id, quantity };
  } catch (err) {
    throw err;
  }
});

export const removeItem = createAsyncThunk(
  "REMOVE_ITEM",
  async (data, thunkAPI) => {
    try {
      const { token, cartInUse } = thunkAPI.getState();

      await axios.delete(`/api/cart/${cartInUse.id}/${data.id}`, {
        headers: { authorization: token },
      });

      return data;
    } catch (err) {
      throw err;
    }
  }
);

const cartReducer = createReducer([], {
  [addItem.fulfilled]: (state, action) => [...state, action.payload],
  [removeItem.fulfilled]: (state, action) =>
    state.filter((item) => item.id === action.payload.id),
});

export default cartReducer;
