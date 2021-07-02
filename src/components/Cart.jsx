/** @format */

import * as React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import "../assets/cart.css";

import CartItems from "./CartItems";

export default function Cart() {
  const { isLogIn, carItems } = useSelector((state) => state);

  let orderTotal = 0;

  return (
    <div>
      <div className="cart_section">
        <div className="container-fluid" />
        <div className="row">
          <div className="col-lg-10 offset-lg-1">
            <div className="cart_container">
              <div className="cart_title">
                Shopping Cart<small> (1 item in your cart) </small>
              </div>
              <div className="cart_items">
                <ul className="cart_list">
                  {/* {productsDb.map((producto,i) => {
                   return  <  CartItems key={i} producto={producto} />
                  })} */}
                </ul>
              </div>
              <div className="order_total">
                <div className="order_total_content text-md-right">
                  <div className="order_total_title">Order Total:</div>
                  <div className="order_total_amount">₹22000</div>
                </div>
              </div>
              <div className="cart_buttons">
                <Link to="/">
                  <button type="button" className="button cart_button_clear">
                    Continue Shopping
                  </button>
                </Link>
                <button type="button" className="button cart_button_checkout">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
