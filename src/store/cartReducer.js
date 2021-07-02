import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { aumentarCantidad, disminuirCantidad } from "../utils";

export const getItems = createAsyncThunk(
  "GET_ITEMS",
  async (data, thunkAPI) => {
    try {
      const { token, id } = data;

      const req = await axios.get(`/api/cart/items/${id}`, {
        headers: { authorization: token },
      });

      return req.data;
    } catch (err) {
      throw err;
    }
  }
);

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

export const quantityRemove = createAsyncThunk(
  "QUANTITY_REMOVE_ITEM",
  async (data, thunkAPI) => {
    try {
      const { token, cartInUse } = thunkAPI.getState();

      const body = {
        carritoId: cartInUse.id,
        productId: data.id,
        type: "remove",
      };

      await axios.put(`/api/cart`, body, {
        headers: { authorization: token },
      });

      return data;
    } catch (err) {
      throw err;
    }
  }
);

export const quantityAdd = createAsyncThunk(
  "QUANTITY_ADD_ITEM",
  async (data, thunkAPI) => {
    try {
      const { token, cartInUse } = thunkAPI.getState();

      const body = {
        carritoId: cartInUse.id,
        productId: data.id,
        type: "add",
      };

      await axios.put(`/api/cart`, body, {
        headers: { authorization: token },
      });

      return data;
    } catch (err) {
      throw err;
    }
  }
);

const cartReducer = createReducer([], {
  [getItems.fulfilled]: (state, action) => action.payload,
  [addItem.fulfilled]: (state, action) => [...state, action.payload],
  [removeItem.fulfilled]: (state, action) =>
    state.filter((item) => item.id === action.payload.id),
  [quantityRemove.fulfilled]: aumentarCantidad,
  [removeItem.fulfilled]: disminuirCantidad,
});

export default cartReducer;
