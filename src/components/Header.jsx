import * as React from "react";
import { Link, useHistory } from "react-router-dom";
import { setProductos, buscarProducto } from "../store/productos";
import { useDispatch, useSelector } from "react-redux";

export default function Header() {
    const dispatch = useDispatch();
    let userLog = useSelector((state) => state.loggedUser);
    const buscar = function (e) {
        if (e.keyCode === 13) {
            dispatch(buscarProducto(e.target.value.toLowerCase()));
            e.target.value = "";
        }
    };

    function inicio() {
        dispatch(buscarProducto(""));
    }

    function logOut() {
        window.localStorage.removeItem("branchToken");
    }

    return (
        <div className="container">
            <nav className="navbar navbar-expand-sm navbar-light bg-white border-bottom">
                {" "}
                <button className="logo-btn" onClick={inicio}>
                    <img
                        className="logo"
                        src="https://i.postimg.cc/MK3vy7xt/Captura-de-Pantalla-2021-07-01-a-la-s-01-10-58.png"
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
                        <li className="nav-item rounded bg-light search-nav-item d-flex ">
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
                                {!userLog.name ? (
                                    <div className="nav-link">
                                        <Link to="/login">
                                            <span class="fa fa-user-o p-0"></span>
                                            <img src="https://img.icons8.com/ios-filled/30/000000/stormtrooper.png" />
                                            <span class="text">Login</span>
                                        </Link>
                                    </div>
                                ) : (
                                    <div className="nav-link">
                                        <button onClick={logOut} className="register-btn">
                                            cerrar sesion
                                        </button>
                                        {/* {userLog.name} */}
                                        {/* <button>Cerrar sesion</button> */}
                                    </div>
                                )}
                            </li>
                            <li className="nav-item ">
                                <div className="nav-link">
                                    <Link to="/cart">
                                        <span class="fa fa-shopping-cart"></span>
                                        <img src="https://img.icons8.com/ios-glyphs/30/000000/fast-cart.png" />
                                        <span class="textCart">Carrito</span>
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
