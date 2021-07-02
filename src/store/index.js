import { configureStore } from "@reduxjs/toolkit";
import { usuariosReducer, usuarioReducer, favoritosReducer, loginReducer, registerReducer, tokenReducer } from "./user"
import { productosReducer, unSoloProductoReducer, buscarProductoReducer } from "./productos"
import logger from 'redux-logger'
import loggedUserReducer from "./loggedUserReducer";


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
        productoIndividual: unSoloProductoReducer,
        item: buscarProductoReducer,

        //registerToken
        token: tokenReducer,
        loggedUser: loggedUserReducer
    }
})

export default store