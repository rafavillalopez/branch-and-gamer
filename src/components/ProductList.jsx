import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import { setProductos, buscarProducto } from "../store/productos";
import ProductBlock from "./ProductBlock";

export default function ProductList() {
    const dispatch = useDispatch();
    let productos = useSelector((state) => state.productos);
    let item = useSelector((state) => state.buscarProducto);

    React.useEffect(() => {
        axios
            .get(`/api/products?item=${item}`)
            .then((res) => res.data)
            .then((data) => {
                dispatch(setProductos(data));
            });
    }, [item]);

    return (
        <div className="productList">
            {/* <h1>Productlist</h1> */}

            {!item
                ? //Todos los productos por que no existe nada en el input
                  productos.length
                    ? productos.map((producto) => {
                          return <ProductBlock producto={producto} />;
                      })
                    : console.log(
                          "NO se encontro ningun producto con ese INPUT value"
                      )
                : productos.map((producto) => {
                      return <ProductBlock producto={producto} />;
                  })}
        </div>
    );
}
