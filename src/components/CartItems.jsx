/** @format */
import React from "react";
import { capitalizeFirstLetter } from "../utils/index";
import "../assets/cart.css";
import { useDispatch } from "react-redux";
import { quantityAdd, quantityRemove, removeItem } from "../store/cartReducer";
import { useSelector } from "react-redux";
import useCarrito from "../hooks/useCarrito";

export default function CartItems({ producto }) {
  const dispatch = useDispatch();
  // const { addOneToCart, removeFromCart, removeOneFromCart } = useCarrito([]);
  // const { isLogIn } = useSelector((state) => state);

  const addOne = () => {
    // if (!isLogIn) addOneToCart(producto.id);
    dispatch(quantityAdd({ id: producto.id }));
  };

  const removeOne = () => {
    // if (!isLogIn) removeOneFromCart(producto.id);
    dispatch(quantityRemove({ id: producto.id }));
  };

  const handleRemove = () => {
    // if (!isLogIn) removeFromCart(producto.id);
    dispatch(removeItem({ id: producto.id }));
  };

  return (
    <li className="cartItem">
      <div className="cartItemImage">
        <img src={producto.imageUrl} alt={producto.title} />
      </div>
      <div className="cartItemName">
        <div className="cart_item_text">
          {capitalizeFirstLetter(producto.title)}
        </div>
      </div>
      <div className="cartItemQuantity">
        <button
          onClick={() => {
            Number(producto.quantity) !== 1 ? removeOne() : handleRemove();
          }}
        >
          <img
            src="https://img.icons8.com/android/24/000000/minus.png"
            alt="-"
          />
        </button>
        <div className="cart_item_text">{producto.quantity}</div>
        <button onClick={addOne}>
          <img
            src="https://img.icons8.com/android/24/000000/plus.png"
            alt="+"
          />
        </button>
      </div>
      <div className="cartItemPrice">
        <div className="cart_item_text">${producto.price}</div>
      </div>
      <div className="cartItemTotalPrice">
        <div className="cart_item_text">
          ${producto.quantity * producto.price}
        </div>
      </div>
      <button onClick={handleRemove}>Eliminar del carrito</button>
    </li>
  );
}
