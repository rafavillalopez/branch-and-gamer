/** @format */

import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import {Link} from "react-router-dom"
import axios from "axios";

import "../assets/index.css";

export default function SingleProduct() {
  const { id } = useParams();
  const history = useHistory();
  const [producto, setProducto] = useState({});

  console.log("AL MENOS A SINGLE PRODUCT");
  useEffect(() => {
    console.log("LLEGUE AQUI");
    axios
      .get(`/api/products/${id}`)
      .then((response) => {
        setProducto(response.data);
      })
      .catch(() => {
        history.push("/");
      });
  }, [history, id]);

  let formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  return (
    <div className="container-fluid mt-5">
      <div className="row">
        <div className="col-md-5">
          <div className="carousel slide" data-ride="carousel" id="carousel-1">
            <div className="carousel-inner" role="listbox">
              <div className="carousel-item-img active">
                <img
                  className="img-thumbnail"
                  src={producto.imageUrl}
                  alt={producto.title}
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-7">
          <h4>{producto.title}</h4>
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
            <span className="ml-1 font-weight-bold">Descripcion: </span>
            <span className="ml-1">
              <br />
            </span>
          </div>
          <div className="d-flex align-items-center offers mb-1">
            <i className="fa fa-check-square-o mt-1"></i>
            <span className="ml-1 font-weight-bold"></span>
            <div>
              5% Unlimited Cashback on Axis Bank Credit Card.
              5% Unlimited Cashback on Axis Bank Credit Card.
              5% Unlimited Cashback on Axis Bank Credit Card
              5% Unlimited Cashback on Axis Bank Credit Card
              5% Unlimited Cashback on Axis Bank Credit Card
              5% Unlimited Cashback on Axis Bank Credit Card
              <br />
            </div>
          </div>
          <div className="d-flex align-items-center mt-5 delivery">
            <button type="button" className="button cart_button_clear">
                    Adherir al carrito
                  </button>
                  <Link to="/"><button type="button" className="button cart_button_clear">
                    Volver al inicio
                  </button>
                  </Link>
          </div>
          <hr />
        </div>
      </div>
    </div>
  );
}
