import * as React from "react";
import { Link, useHistory } from "react-router-dom";


export default function Navbar() {

    const history = useHistory()

    const inicio = () => {
        history.push('/')
    }

    return (
        <div>
            <nav className="navbar navbar-expand-sm navbar-light bg-white border-bottom">
                {" "}
                <button className='logo-btn' onClick={inicio}>
                    <img className='logo' src='https://i.postimg.cc/MK3vy7xt/Captura-de-Pantalla-2021-07-01-a-la-s-01-10-58.png' alt='Branch&Gamer'/>
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
                            <div className="nav-link" href="#">
                                <Link to="/login">
                                    <span class="fa fa-user-o"></span>
                                    <img src="https://img.icons8.com/ios-filled/30/000000/stormtrooper.png"/>
                                    <span class="text" >Login</span>
                                </Link>
                            </div>{" "}
                        </li>
                        <li className="nav-item ">
                            <div className="nav-link" href="#">
                                <Link to="/cart">
                                    <span class="fa fa-shopping-cart"></span>
                                    <img src="https://img.icons8.com/ios-glyphs/30/000000/fast-cart.png"/>
                                    <span class="textCart">Cart</span>
                                </Link>
                            </div>{" "}
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}
