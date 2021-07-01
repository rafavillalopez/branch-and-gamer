import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { setLogginTrue } from "./authReducer";

import { setToken } from "./user";

export const setUser = createAsyncThunk("SET_USER", async (data, thunkAPI) => {
  try {
    console.log("LLEGUE")
    const token = window.localStorage.getItem("branchToken");

    if (token) {

      const req = await axios.get(`/api/users/logged`, {
        headers: { authorization: token },
      });

      thunkAPI.dispatch(setToken(token));
      thunkAPI.dispatch(setLogginTrue)

      return req.data;
    }
    return {}
  } catch (err) {
    throw err;
  }
});

const loggedUserReducer = createReducer([], {
  [setUser.fulfilled]: (state, action) => action.payload,
});

export default loggedUserReducer;
