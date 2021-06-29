import { createAction, createReducer } from "@reduxjs/toolkit"

//productos
export const setProductos = createAction("set_Productos")
export const productosReducer = createReducer([], {
    [setProductos]: (state, action) => action.payload
})

//un solo producto 
export const setUnSoloProducto = createAction("set_unSoloProducto")
export const unSoloProductoReducer = createReducer([], {
    [setUnSoloProducto]: (state, action) => action.payload
})


