import * as React from "react";
import { Link, useHistory } from 'react-router-dom'
import { setProductos, buscarProducto } from "../store/productos";
import { useDispatch, useSelector } from "react-redux";

export default function Header() {

    const dispatch = useDispatch();

    const buscar = function (e) {
        if (e.keyCode === 13) {
            dispatch(buscarProducto(e.target.value.toLowerCase()));
            e.target.value = "";
        }
    };

    return(
        <div>
            <h4>Header</h4>
            <input placeholder="Buscar item..." onKeyUp={buscar} />
        </div>
    )
}