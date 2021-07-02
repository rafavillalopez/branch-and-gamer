/** @format */

import * as React from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import "../assets/index.css"
export default function SingleProduct({ producto }) {
    let formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    })
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-12 col-md-5 p-4">
                    <div className="carousel slide" data-ride="carousel" id="carousel-1">
                        <div className="carousel-inner" role="listbox">
                            <div className="carousel-item-img active">
                                <img className="img-thumbnail border-0" src={producto.imageUrl} alt="Slide Image" loading="lazy" />
                            </div>
                        </div>
                    </div>

                </div>
                <div className="col-12 col-md-7">
                    <h4>{producto.title}</h4>
                    <div className="price"><span className="mr-2"><i className="fa fa-rupee text-success"></i>{formatter.format(producto.price)}</span><span className="mr-2 cut"></span><span className="text-success">25% OFF</span></div>
                    <div className="d-flex flex-row">
                        <div className="icons mr-2"><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star-half-o"></i><i className="fa fa-star-o"></i></div><span>1200 ratings &amp; 564 reviews</span>
                    </div>
                    <div className="d-flex align-items-center mt-4 offers mb-1"><i className="fa fa-check-square-o mt-1"></i><span className="ml-1 font-weight-bold">Bank Offers</span><span className="ml-1">20% Instant Discount on SBI Credit Cards<br /></span></div>
                    <div className="d-flex align-items-center offers mb-1"><i className="fa fa-check-square-o mt-1"></i><span className="ml-1 font-weight-bold">Bank Offers</span><span className="ml-1">5% Unlimited Cashback on Axis Bank Credit Card<br /></span></div>
                    <div className="d-flex align-items-center offers mb-1"><i className="fa fa-check-square-o mt-1"></i><span className="ml-1 font-weight-bold">Bank Offers</span><span className="ml-1">Extra 5% off* with Axis Bank Buzz Credit Card<br /></span></div>
                    <div className="d-flex align-items-center offers"><i className="fa fa-check-square-o mt-1"></i><span className="ml-1 font-weight-bold">Bank Offers</span><span className="ml-1">20% Instant Discount on pay with&nbsp;&nbsp;google wallet<br /></span></div>
                    <div className="d-flex align-items-center mt-5 delivery"><i className="fa fa-map-marker"></i><span className="ml-2">Delivery by 23 Jul, Tuesday<br /></span><span className="ml-2 mr-2">|<br /></span><span className="ml-2 mr-2 text-success">FREE<br /></span></div>
                    <hr />
                    <div className="d-flex align-items-center mt-2" />
                    <div class="footer d-flex flex-column mt-5">
                        <div class="row r4">
                            <div class="col-md-2 myt des"><a href="#">Descripcion</a></div>
                            <div class="col-md-2 myt"><a href="#">Reseña</a></div>
                            <div class="col-md-2 mio offset-md-4"><a href="#">Agregar al carrito</a></div>
                            <div class="col-md-2 myt"><button type="button" class="btn btn-outline-light"><a href="#">Comprar</a></button></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}
