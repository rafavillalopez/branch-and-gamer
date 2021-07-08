import { createAction, createReducer } from "@reduxjs/toolkit"

//productos
export const setProductos = createAction("set_Productos")
export const productosReducer = createReducer([], {
    [setProductos]: (state, action) => action.payload
})

//buscar producto
export const buscarProducto = createAction("set_buscarProducto")
export const buscarProductoReducer = createReducer("", {
    [buscarProducto]: (state, action) => action.payload
})

