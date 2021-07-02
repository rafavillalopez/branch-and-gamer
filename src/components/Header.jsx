import * as React from "react";
import { Link } from "react-router-dom";
import { setProductos, buscarProducto } from "../store/productos";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setUserVoid } from "../store/loggedUserReducer";

export default function Header() {
    const dispatch = useDispatch();
    let { isLogIn } = useSelector((state) => state);

    const buscar = function (e) {
        if (e.keyCode === 13) {
            dispatch(buscarProducto(e.target.value.toLowerCase()));
            e.target.value = "";
        }
    };

    function inicio() {
        axios
            .get(`/api/products`)
            .then((res) => res.data)
            .then((data) => {
                dispatch(setProductos(data));
            });
    }

    function logOut() {
        window.localStorage.removeItem("branchToken");
        dispatch(setUserVoid());
    }

    return (
        <div className="container">
            <nav className="navbar navbar-expand-sm navbar-light bg-white border-bottom">
                {" "}
                <button className="logo-btn" onClick={inicio}>
                    <img
                        className="logo"
                        src="https://i.postimg.cc/3J1SHX0X/b-g-logo.png"
                        alt="Branch&Gamer"
                    />
                </button>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarColor"
                    aria-controls="navbarColor"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    {" "}
                    <span className="navbar-toggler-icon"></span>{" "}
                </button>
                <div className="collapse navbar-collapse" id="navbarColor">
                    <ul className="navbar-nav d-flex justify-content-around w-100 align-items-center">
                        <li className="nav-item  bg-light search-nav-item d-flex justify-content-start">
                            <input
                                type="text"
                                id="search"
                                className="bg-light pl-3"
                                placeholder="Busca un producto"
                                onKeyUp={buscar}
                            />
                            <span className="fa fa-search text-muted"></span>
                        </li>
                        <div className="d-flex">
                            <li className="nav-item">
                                {!isLogIn ? (
                                    <div className="nav-link">
                                        <Link to="/login">
                                            <span className="fa fa-user-o p-0"></span>
                                            <img
                                                src="https://img.icons8.com/ios-filled/30/000000/stormtrooper.png"
                                                alt=""
                                            />
                                            <span className="text">Login</span>
                                        </Link>
                                    </div>
                                ) : (
                                    <div className="nav-link">
                                        <button className="log-out-button" onClick={logOut}>
                                            <span className="fa fa-user-o p-0"></span>
                                            <img
                                                src="https://img.icons8.com/ios-filled/30/000000/stormtrooper.png"
                                                alt=""
                                            />
                                            <span className="text">LogOut</span>
                                        </button>
                                    </div>
                                )}
                            </li>
                            <li className="nav-item ">
                                <div className="nav-link">
                                    <Link to="/cart">
                                        <span className="fa fa-shopping-cart"></span>
                                        <img
                                            src="https://img.icons8.com/ios-glyphs/30/000000/fast-cart.png"
                                            alt=""
                                        />
                                        <span className="textCart">
                                            Carrito
                                        </span>
                                    </Link>
                                </div>{" "}
                            </li>
                        </div>
                    </ul>
                </div>
            </nav>
        </div>
    );
}
