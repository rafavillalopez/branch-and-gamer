import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from 'react-router-dom'
import axios from 'axios'
import { setProductos, buscarProducto } from '../store/productos'

export default function ProductList() {


const dispatch = useDispatch()
let productos = useSelector(state => state.productos)
let item = useSelector(state => state.buscarProducto)

const buscar = function(e) {
    if(e.keyCode === 13){
        dispatch(buscarProducto(e.target.value))
        e.target.value = ""
    }
}

React.useEffect(() => {
    axios.get(`/api/productos?item=${item}`)
        .then((res) => res.data)
        .then(data => { dispatch(setProductos(data)) })
},[item])

    return(
        <div>
            <input placeholder='Buscar item...' onKeyUp={buscar}/>
            {!item ? 
            // RANDOM MAP
            productos.length ? productos.map(
                 producto => console.log("Producto: ", producto)
                )
                :
                "Ese producto no existe"
                :
            "MAPEO ORDENADO"
            }
            <h1>Productlist</h1>
        </div>
    )
}