import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { setUserVoid } from "../store/loggedUserReducer";

export default function Navbar() {
    const history = useHistory();
    const dispatch = useDispatch();

    let { isLogIn } = useSelector((state) => state);

    function logOut() {
        window.localStorage.removeItem("branchToken");
        dispatch(setUserVoid());
    }
    const inicio = () => {
        history.push("/");
    };

    return (
        <div>
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
                    <ul className="navbar-nav">
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
                                    <button
                                        className="log-out-button"
                                        onClick={logOut}
                                    >
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
                            <div className="nav-link" href="#">
                                <Link to="/cart">
                                    <span class="fa fa-shopping-cart"></span>
                                    <img
                                        src="https://img.icons8.com/ios-glyphs/30/000000/fast-cart.png"
                                        alt=""
                                    />
                                    <span class="textCart">Carrito</span>
                                </Link>
                            </div>{" "}
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}
