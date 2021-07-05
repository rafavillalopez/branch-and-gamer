/** @format */

import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import CartItems from "./CartItems";
import { getProductFromDbAndSetQuantities } from "../utils";

import "../assets/cart.css";

export default function Cart() {
    const { cartItems } = useSelector((state) => state);

    const [itemsToRender, setItemsToRender] = useState([]);

    let orderTotal = 0;

    useEffect(() => {
        getProductFromDbAndSetQuantities(cartItems).then((dbproducts) => {
            setItemsToRender(dbproducts);
        });
    }, [cartItems]);

    return (
        <div>
            <div className="cart_section">
                <div className="container-fluid" />
                <div className="row">
                    <div className="col-lg-10 offset-lg-1">
                        <div className="cart_container">
                            <div className="cart_title">
                                Shopping Cart
                                <small>
                                    {" "}
                                    ({itemsToRender
                                        ? itemsToRender.length
                                        : 1}{" "}
                                    item/s in your cart){" "}
                                </small>
                            </div>
                            <div className="cart_items">
                                <ul className="cart_list">
                                    {itemsToRender?.map((producto, i) => {
                                        orderTotal +=
                                            producto.price * producto.quantity;
                                        return (
                                            <CartItems
                                                key={i}
                                                producto={producto}
                                            />
                                        );
                                    })}
                                </ul>
                            </div>
                            <div className="order_total">
                                <div className="order_total_content text-md-right">
                                    <div className="order_total_title">
                                        Order Total:
                                    </div>
                                    <div className="order_total_amount">{`$${orderTotal}`}</div>
                                </div>
                            </div>
                            <div className="cart_buttons">
                                <Link to="/">
                                    <button
                                        type="button"
                                        className="button cart_button_clear"
                                    >
                                        Seguir Comprando
                                    </button>
                                </Link>
                                <button
                                    type="button"
                                    className="button cart_button_checkout"
                                >
                                    Confirmar Compra
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
