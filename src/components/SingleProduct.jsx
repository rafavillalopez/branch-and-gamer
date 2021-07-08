/** @format */

import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { isInCarItems } from "../utils";
import { addItem, removeItem } from "../store/cartReducer";
import "../assets/index.css";
import Navbar from './Navbar'

export default function SingleProduct() {
    const { id } = useParams();
    const { productos, cartItems } = useSelector((state) => state);
    const [producto] = productos.filter((x) => Number(x.id) === Number(id));
    const dispatch = useDispatch();
    const isInCar = isInCarItems(cartItems, Number(id));

    let formatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
    });

    const mayus = (arr) => {
        return arr.charAt(0).toUpperCase() + arr.slice(1);
      }

    const handleAdd = () => {
        dispatch(addItem({ id: Number(id) }));
    };

    const handleRemove = () => {
        dispatch(removeItem({ id: Number(id) }));
    };
    return (
        <div >
        <Navbar />
       <br/>
       <Link
           to="/"
           className="goback"
           style={{ textDecoration: "none" , paddingBottom: '8px'}}
       >
           Volver
       </Link>
        <div className="container-fluid mt-5">
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
                                    src={producto.imageUrl}
                                    alt={mayus(producto.title)}
                                    loading="lazy"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-7">
                    <h2>{mayus(producto.title)}</h2>
                    <h4 style={{color: "gray"}}>{mayus(producto.marca)}</h4>
                    <div className="price">
                        <span className="mr-2">
                            <i className="fa fa-rupee text-success"></i>
                            {formatter.format(producto.price)}
                        </span>
                    </div>
                    <div className="d-flex flex-row">
                        <div className="icons mr-2">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star-half-o"></i>
                            <i className="fa fa-star-o"></i>
                        </div>
                        <span>1200 ratings &amp; 564 reviews</span>
                    </div>
                    <div className="d-flex align-items-center mt-4 offers mb-1">
                        <i className="fa fa-check-square-o mt-1"></i>
                        <span className="ml-1 font-weight-bold">
                            Descripción:{" "}
                        </span>
                        <span className="ml-1">
                            <br />
                        </span>
                    </div>
                    <div className="d-flex align-items-center offers mb-1">
                        <i className="fa fa-check-square-o mt-1"></i>
                        <span className="ml-1 font-weight-bold"></span>
                        <div>
                            {producto.description}
                            <br />
                            <br />
                            CÓMO COMPRAR EN NUESTRA TIENDA OFICIAL:
                            <br />
                            1. Selecciona el producto que deseas adquirir y haz Click en Añadir al carrito.
                            <br />
                            2. Gestiona el Envío: carga la dirección completa del domicilio donde quieres recibir tu compra.
                            <br />
                            3. Elige la forma de pago: contamos con todos los métodos de pago.
                        </div>
                    </div>
                    <div className="d-flex align-items-center mt-5 delivery">
                        <button
                            type="button"
                            className="button cart_button_clear"
                            onClick={isInCar ? handleRemove : handleAdd}
                        >
                            {isInCar
                                ? "Eliminar del carrito"
                                : "Añadir al carrito"}
                        </button>
                        <Link to="/">
                            <button
                                type="button"
                                className="button cart_button_clear"
                            >
                                Volver al inicio
                            </button>
                        </Link>
                    </div>
                    <hr />
                </div>
            </div>
        </div>
        </div>
    );
}
