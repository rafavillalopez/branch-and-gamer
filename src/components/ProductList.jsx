import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setProductos } from "../store/productos";
import ProductBlock from "./ProductBlock";

export default function ProductList() {
    const dispatch = useDispatch();
    let productos = useSelector((state) => state.productos);
    let item = useSelector((state) => state.item);

  React.useEffect(() => {
    axios
      .get(`/api/products?item=${item}`)
      .then((res) => res.data)
      .then((data) => {
        dispatch(setProductos(data));
      });
  }, [dispatch, item]);

  return (
    <div className="productList w-100">
      {!item ? (
        productos.length ? (
          productos.map((producto, i) => {
            return <ProductBlock key={i} producto={producto} />;
          })
        ) : (
          <h3 className="no-product d-flex justify-content-center align-items-center w-100">
            "No se encontró ningún producto."
          </h3>
        )
      ) : (
        productos.map((producto, i) => {
          return <ProductBlock key={i} producto={producto} />;
        })
      )}
    </div>
  );
}
