import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

import Valoration from "./Valoration";

import "../assets/cart.css";

export default function ValorationsContainer() {
  const { id } = useParams();
  const { ordenConItems } = useSelector((state) => state);
  const [currentOrder] = ordenConItems.filter((x) => x.id === Number(id));

  return (
    <div>
      <div className="cart_section">
        <div className="container-fluid" />
        <div className="row">
          <div className="col-lg-10 offset-lg-1">
            <div className="cart_container">
              <div className="cart_title">
                Productos de tu Orden{" "}
                <small>
                  ({currentOrder.products ? currentOrder.products.length : 1}{" "}
                  item/s)
                </small>
              </div>
              <div className="cart_items">
                <ul className="cart_list">
                  {currentOrder.products?.map((producto, i) => {
                    return <Valoration key={i} producto={producto} />;
                  })}
                </ul>
              </div>
              <div className="cart_buttons">
                <Link to="/perfil">
                  <button type="button" className="button cart_button_clear">
                   Volver a Perfil
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
