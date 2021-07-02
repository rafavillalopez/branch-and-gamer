/** @format */
import React from "react";
import "../assets/cart.css";
import {Link} from "react-router-dom"

export default function CartItems({ producto }) {
  return (
    <li className="cart_item clearfix">
      <div className="cart_item_image">
        <img src={producto.imageUrl} alt={producto.title} />
      </div>
      <div className="cart_item_info d-flex flex-md-row flex-column justify-content-between">
        <div className="cart_item_name cart_info_col">
          <div className="cart_item_title">Name</div>
          <div className="cart_item_text">{producto.title}</div>
        </div>
        <div className="cart_item_color cart_info_col">
          <div className="cart_item_title">Color</div>
          <div className="cart_item_text">{producto.colors.join(", ")}</div>
        </div>
        <div className="cart_item_quantity cart_info_col">
          <div className="cart_item_title">Quantity</div>
          <div className="cart_item_text">{producto.quantity}</div>
        </div>
        <div className="cart_item_price cart_info_col">
          <div className="cart_item_title">Price</div>
          <div className="cart_item_text">${producto.price}</div>
        </div>
        <div className="cart_item_total cart_info_col">
          <div className="cart_item_title">Total</div>
          <div className="cart_item_text">
            ${producto.quantity * producto.price}
          </div>
        </div>
        <Link to="/"><button type="button" className="button cart_button_clear">
        <img className="trash_item" src="https://img.icons8.com/ios-filled/48/000000/trash.png" />
                  </button>
                  </Link>
      </div>
    </li>
  );
}
