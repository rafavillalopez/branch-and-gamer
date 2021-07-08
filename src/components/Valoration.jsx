import React, { useState, useEffect } from "react";
import ReactStars from "react-rating-stars-component";
import axios from "axios";

import { capitalizeFirstLetter, isInUserValorations } from "../utils/index";
import "../assets/cart.css";
import { useSelector } from "react-redux";

export default function Valoration({ producto }) {
  const { token } = useSelector((state) => state);
  const [rating, setRating] = useState(0);
  const [able, setAble] = useState(true);
  const [valoraciones, setValoraciones] = useState([]);

  const onlyOnePerUser = isInUserValorations(valoraciones, producto.id);
  const [valoracion] = valoraciones.filter((x) => x.productId === producto.id);

  const onClick = () => {
    const body = {
      productId: producto.id,
      value: rating,
    };
    axios
      .post("/api/valoraciones", body, {
        headers: { authorization: token },
      })
      .then(() => {
        setAble(false);
      })
      .catch((err) => {
        console.log("err", err);
        setAble(false);
      });
  };

  useEffect(() => {
    axios
      .get(`/api/valoraciones/user`, {
        headers: { authorization: token },
      })
      .then((res) => {
        setValoraciones(res.data);
      })
      .catch((err) => {
        console.log("err", err);
      });
  }, [token]);

  const ratingChanged = (newRating) => {
    setRating(newRating);
  };

  return (
    <li className="cartItem">
      <div className="cartItemImage">
        <img src={producto.imageUrl} alt={producto.title} />
      </div>
      <div className="cartItemName">
        <div className="cart_item_text">
          {`${capitalizeFirstLetter(producto.title)} ${capitalizeFirstLetter(
            producto.marca
          )}`}
        </div>
      </div>
      <div className="cartItemQuantity">
        <div className="cart_item_text">{producto.quantity}</div>
      </div>

      <ReactStars
        count={5}
        value={onlyOnePerUser ? valoracion.value : 0}
        onChange={able ? ratingChanged : () => {}}
        size={40}
        activeColor="#ffd700"
        edit={!onlyOnePerUser}
      />

      <svg
        className="svg-icon"
        viewBox="0 0 20 20"
        onClick={able ? onClick : () => {}}
      >
        <path
          fill="none"
          d={
            !able
              ? "M7.197,16.963H7.195c-0.204,0-0.399-0.083-0.544-0.227l-6.039-6.082c-0.3-0.302-0.297-0.788,0.003-1.08 C0.919,9.266,1.404,9.269,1.702,9.57l5.495,5.536L18.221,4.083c0.301-0.301,0.787-0.301,1.087,0c0.301,0.3,0.301,0.787,0,1.087 L7.741,16.738C7.596,16.882,7.401,16.963,7.197,16.963z"
              : "M17.218,2.268L2.477,8.388C2.13,8.535,2.164,9.05,2.542,9.134L9.33,10.67l1.535,6.787c0.083,0.377,0.602,0.415,0.745,0.065l6.123-14.74C17.866,2.46,17.539,2.134,17.218,2.268 M3.92,8.641l11.772-4.89L9.535,9.909L3.92,8.641z M11.358,16.078l-1.268-5.613l6.157-6.157L11.358,16.078z"
          }
        ></path>
      </svg>
    </li>
  );
}
