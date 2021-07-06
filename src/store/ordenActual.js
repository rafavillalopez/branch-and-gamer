import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const setOrdenActual = createAsyncThunk("Set_OrdenActual", async (data, thunkAPI) => {
    try {
        const { token } = thunkAPI.getState()
        const req = await axios.get(`/api/cart/buy`, {
            headers: { authorization: token },
        });
        return req.data
    } catch (err) {
        throw err;
    }
});

const ordenActualReducer = createReducer([], {
    [setOrdenActual.fulfilled]: (state, action) => action.payload,
}
);

export default ordenActualReducer;