/** @format */

import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { average, isInCarItems } from "../utils";
import { addItem, removeItem } from "../store/cartReducer";
import "../assets/index.css";
import Navbar from "./Navbar";
import { setSelectedProduct } from "../store/selectedProductReducer";

export default function SingleProduct() {
  const { id } = useParams();
  const { cartItems, selectedProduct, valoration } = useSelector(
    (state) => state
  );
  const valoracionNum = average(valoration.map((x) => x.value));

  const dispatch = useDispatch();
  const isInCar = isInCarItems(cartItems, Number(id));

  let formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  const mayus = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  useEffect(() => {
    dispatch(setSelectedProduct(Number(id)));
  }, [dispatch, id]);

  const handleAdd = () => {
    dispatch(addItem({ id: Number(id) }));
  };

  const handleRemove = () => {
    dispatch(removeItem({ id: Number(id) }));
  };

  return (
    <div>
      <Navbar />
      <br />
      <Link to="/" className="goback" style={{ textDecoration: "none" }}>
        <svg
          class="svg-icon"
          viewBox="0 0 20 20"
          style={{
            color: "black",
            width: "25px",
            paddingTop: "5px",
          }}
        >
          <path
            fill="none"
            d="M18.271,9.212H3.615l4.184-4.184c0.306-0.306,0.306-0.801,0-1.107c-0.306-0.306-0.801-0.306-1.107,0
                            L1.21,9.403C1.194,9.417,1.174,9.421,1.158,9.437c-0.181,0.181-0.242,0.425-0.209,0.66c0.005,0.038,0.012,0.071,0.022,0.109
                            c0.028,0.098,0.075,0.188,0.142,0.271c0.021,0.026,0.021,0.061,0.045,0.085c0.015,0.016,0.034,0.02,0.05,0.033l5.484,5.483
                            c0.306,0.307,0.801,0.307,1.107,0c0.306-0.305,0.306-0.801,0-1.105l-4.184-4.185h14.656c0.436,0,0.788-0.353,0.788-0.788
                            S18.707,9.212,18.271,9.212z"
          ></path>
        </svg>
      </Link>
      <div className="container-fluid mt-5">
        {selectedProduct.id && (
          <div className="row">
            <div className="col-md-5">
              <div
                className="carousel slide"
                data-ride="carousel"
                id="carousel-1"
              >
                <div className="carousel-inner" role="listbox">
                  <div className="carousel-item-img active">
                    <img
                      className="img-thumbnail"
                      src={selectedProduct.imageUrl}
                      alt={mayus(selectedProduct.title)}
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-7">
              <h2>{mayus(selectedProduct.title)}</h2>
              <h4 style={{ color: "gray" }}>{mayus(selectedProduct.marca)}</h4>
              <div className="price">
                <span className="mr-2">
                  <i className="fa fa-rupee text-success"></i>
                  {formatter.format(selectedProduct.price)}
                </span>
                <div className="mr-2">
                  <i className="fa fa-rupee text-success"></i>
                  {`Valoracion: ${valoracionNum} `}
                  <svg class="svg-icon" viewBox="0 0 24 24">
                    <path
                      fill="none"
                      d="M16.85,7.275l-3.967-0.577l-1.773-3.593c-0.208-0.423-0.639-0.69-1.11-0.69s-0.902,0.267-1.11,0.69L7.116,6.699L3.148,7.275c-0.466,0.068-0.854,0.394-1,0.842c-0.145,0.448-0.023,0.941,0.314,1.27l2.871,2.799l-0.677,3.951c-0.08,0.464,0.112,0.934,0.493,1.211c0.217,0.156,0.472,0.236,0.728,0.236c0.197,0,0.396-0.048,0.577-0.143l3.547-1.864l3.548,1.864c0.18,0.095,0.381,0.143,0.576,0.143c0.256,0,0.512-0.08,0.729-0.236c0.381-0.277,0.572-0.747,0.492-1.211l-0.678-3.951l2.871-2.799c0.338-0.329,0.459-0.821,0.314-1.27C17.705,7.669,17.316,7.343,16.85,7.275z M13.336,11.754l0.787,4.591l-4.124-2.167l-4.124,2.167l0.788-4.591L3.326,8.5l4.612-0.67l2.062-4.177l2.062,4.177l4.613,0.67L13.336,11.754z"
                    ></path>
                  </svg>
                </div>
              </div>
              <div className="d-flex flex-row">
                <div className="icons mr-2">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star-half-o"></i>
                  <i className="fa fa-star-o"></i>
                </div>
              </div>
              <div className="d-flex align-items-center mt-4 offers mb-1">
                <i className="fa fa-check-square-o mt-1"></i>
                <span className="ml-1 font-weight-bold">Descripción: </span>
                <span className="ml-1">
                  <br />
                </span>
              </div>
              <div className="d-flex align-items-center offers mb-1">
                <i className="fa fa-check-square-o mt-1"></i>
                <span className="ml-1 font-weight-bold"></span>
                <div>
                  {selectedProduct.description}
                  <br />
                  <br />
                  CÓMO COMPRAR EN NUESTRA TIENDA OFICIAL:
                  <br />
                  1. Selecciona el producto que deseas adquirir y haz Click en
                  Añadir al carrito.
                  <br />
                  2. Gestiona el Envío: carga la dirección completa del
                  domicilio donde quieres recibir tu compra.
                  <br />
                  3. Elige la forma de pago: contamos con todos los métodos de
                  pago.
                </div>
              </div>
              <div className="d-flex align-items-center mt-5 delivery">
                <button
                  type="button"
                  className="button cart_button_clear"
                  onClick={isInCar ? handleRemove : handleAdd}
                >
                  {isInCar ? "Eliminar del carrito" : "Añadir al carrito"}
                </button>
                <Link to="/">
                  <button type="button" className="button cart_button_clear">
                    Volver al inicio
                  </button>
                </Link>
              </div>
              <hr />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
