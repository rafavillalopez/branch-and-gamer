import { configureStore } from "@reduxjs/toolkit";
import { usuariosReducer, favoritosReducer, loginReducer, registerReducer } from "./user"
import { productosReducer, unSoloProductoReducer } from "./productos"



const store = configureStore({
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    reducer: {
        //usuarios
        usuarios: usuariosReducer,
        favoritos: favoritosReducer,
        register: registerReducer,
        login: loginReducer,

        //productos
        productos: productosReducer,
        productoIndividual: unSoloProductoReducer
    }
})

export default store