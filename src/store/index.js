import { configureStore } from "@reduxjs/toolkit";
import {
  usuariosReducer,
  favoritosReducer,
  loginReducer,
  registerReducer,
  tokenReducer,
} from "./user";
import {
  productosReducer,
  unSoloProductoReducer,
  buscarProductoReducer,
} from "./productos";
import logger from "redux-logger";
import loggedUserReducer from "./loggedUserReducer";
import authReducer from "./authReducer";
import SetCartReducer from "./setCarReducer";
import cartReducer from "./cartReducer";

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

    token: tokenReducer,
    loggedUser: loggedUserReducer,
    isLogIn: authReducer,
    cartInUse: SetCartReducer,
    cartItems: cartReducer,
  },
});

export default store;
