import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { addOneToQuantity, removeOneFromQuantity } from "../utils";

export const getItems = createAsyncThunk(
  "GET_ITEMS",
  async (data, thunkAPI) => {
    try {
      const { isLogIn } = thunkAPI.getState();

      if (isLogIn) {
        const { token, id } = data;

        const req = await axios.get(`/api/cart/items/${id}`, {
          headers: { authorization: token },
        });

        return req.data;
      } else {
        const items =
          JSON.parse(window.localStorage.getItem("cart-items-no-log")) || [];

        console.log("ITEMS", items);

        return items;
      }
    } catch (err) {
      throw err;
    }
  }
);

export const addItem = createAsyncThunk("ADD_ITEM", async (data, thunkAPI) => {
  try {
    const { token, cartInUse, isLogIn } = thunkAPI.getState();

    if (isLogIn) {
      const body = {
        carritoId: cartInUse.id,
        productId: data.id,
      };

      const req = await axios.post("/api/cart/add", body, {
        headers: { authorization: token },
      });

      const { productId, quantity } = req.data;
      return { productId, quantity };
    } else {
      const items =
        JSON.parse(window.localStorage.getItem("cart-items-no-log")) || [];

      const obj = { productId: data.id, quantity: 1 };

      const newItems = [...items, obj];

      window.localStorage.setItem(
        "cart-items-no-log",
        JSON.stringify(newItems)
      );
      return obj;
    }
  } catch (err) {
    throw err;
  }
});

export const removeItem = createAsyncThunk(
  "REMOVE_ITEM",
  async (data, thunkAPI) => {
    try {
      const { token, cartInUse, isLogIn } = thunkAPI.getState();

      if (isLogIn) {
        await axios.delete(`/api/cart/${cartInUse.id}/${data.id}`, {
          headers: { authorization: token },
        });
      } else {
        const items =
          JSON.parse(window.localStorage.getItem("cart-items-no-log")) || [];

        const newItems = items.filter((item) => item.productId !== data.id);

        window.localStorage.setItem(
          "cart-items-no-log",
          JSON.stringify(newItems)
        );
      }
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
      const { token, cartInUse, isLogIn } = thunkAPI.getState();
      if (isLogIn) {
        const body = {
          carritoId: cartInUse.id,
          productId: data.id,
          type: "remove",
        };

        await axios.put(`/api/cart`, body, {
          headers: { authorization: token },
        });

        const req = await axios.get(`/api/cart/items/${cartInUse.id}`, {
          headers: { authorization: token },
        });

        return req.data;
      } else {
        const items = JSON.parse(
          window.localStorage.getItem("cart-items-no-log")
        );

        const newItems = removeOneFromQuantity(items, data.id);

        window.localStorage.setItem(
          "cart-items-no-log",
          JSON.stringify(newItems)
        );
        console.log("NEWITEMS", newItems);
        return newItems;
      }
    } catch (err) {
      throw err;
    }
  }
);

export const quantityAdd = createAsyncThunk(
  "QUANTITY_ADD_ITEM",
  async (data, thunkAPI) => {
    try {
      const { token, cartInUse, isLogIn } = thunkAPI.getState();
      if (isLogIn) {
        const body = {
          carritoId: cartInUse.id,
          productId: data.id,
          type: "add",
        };

        await axios.put(`/api/cart`, body, {
          headers: { authorization: token },
        });

        const req = await axios.get(`/api/cart/items/${cartInUse.id}`, {
          headers: { authorization: token },
        });

        return req.data;
      } else {
        const items = JSON.parse(
          window.localStorage.getItem("cart-items-no-log")
        );

        const newItems = addOneToQuantity(items, data.id);

        window.localStorage.setItem(
          "cart-items-no-log",
          JSON.stringify(newItems)
        );
        console.log("NEWITEMS", newItems);
        return newItems;
      }
    } catch (err) {
      throw err;
    }
  }
);

const cartReducer = createReducer([], {
  [getItems.fulfilled]: (state, action) => action.payload,
  [addItem.fulfilled]: (state, action) => [...state, action.payload],
  [removeItem.fulfilled]: (state, action) =>
    state.filter((item) => item.productId !== action.payload.id),
  [quantityAdd.fulfilled]: (state, action) => action.payload,
  [quantityRemove.fulfilled]: (state, action) => action.payload,
});

export default cartReducer;
