import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getValoration = createAsyncThunk(
  "GET_VALORATIOIN",
  async (data, thunkAPI) => {
    try {
      const { token } = thunkAPI.getState();

      const req = await axios.get(`/api/valoraciones/${data}`, {
        headers: { authorization: token },
      });

      return req.data;
    } catch (err) {
      throw err;
    }
  }
);

const valorationsReducer = createReducer([], {
  [getValoration.fulfilled]: (state, action) => action.payload,
});

export default valorationsReducer;
