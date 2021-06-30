import * as React from "react";
import { Link, useHistory } from "react-router-dom";
import { setProductos, buscarProducto } from "../store/productos";
import { useDispatch, useSelector } from "react-redux";

export default function Header() {
    const dispatch = useDispatch();

    const buscar = function (e) {
        if (e.keyCode === 13) {
            dispatch(buscarProducto(e.target.value.toLowerCase()));
            e.target.value = "";
        }
    };

    function inicio() {
        dispatch(buscarProducto(""));
    }

    return (
        <div>
            <nav class="navbar navbar-expand-sm navbar-light bg-white border-bottom">
                {" "}
                <button onClick={inicio}>
                    <a class="navbar-brand ml-2 font-weight-bold" href="#">
                        <span id="burgundy">BranchAnd</span>
                        <span id="orange">Gamer</span>
                    </a>{" "}
                </button>
                <button
                    class="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarColor"
                    aria-controls="navbarColor"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    {" "}
                    <span class="navbar-toggler-icon"></span>{" "}
                </button>
                <div class="collapse navbar-collapse" id="navbarColor">
                    <ul class="navbar-nav">
                        <li class="nav-item rounded bg-light search-nav-item">
                            <input
                                type="text"
                                id="search"
                                class="bg-light"
                                placeholder="Busca un producto"
                                onKeyUp={buscar}
                            />
                            <span class="fa fa-search text-muted"></span>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">
                                <Link to="/login">
                                    <span class="fa fa-user-o"></span>
                                    <span class="text">Login</span>
                                </Link>
                            </a>{" "}
                        </li>
                        <li class="nav-item ">
                            <a class="nav-link" href="#">
                                <Link to="/cart">
                                    <span class="fa fa-shopping-cart"></span>
                                    <span class="text">Cart</span>
                                </Link>
                            </a>{" "}
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}
