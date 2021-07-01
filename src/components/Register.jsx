import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setRegister } from "../store/user";
import { Link, useHistory } from "react-router-dom";
import "./register.css";
import axios from "axios";
import Navbar from "./Navbar";

export default function Register() {
    const History = useHistory();
    let usuario = useSelector((state) => state.register);
    const dispatch = useDispatch();

    function handleSubmit(e) {
        e.preventDefault();
        axios.post("/api/auth/register", usuario).then(() => {
            History.push("login");
        });
    }

    function handleChangeNombre(e) {
        dispatch(setRegister({ ...usuario, name: e.target.value }));
    }

    function handleChangeEmail(e) {
        dispatch(setRegister({ ...usuario, email: e.target.value }));
    }

    function handleChangePassword(e) {
        dispatch(setRegister({ ...usuario, password: e.target.value }));
    }

    return (
        <div>
            <Navbar/>
            <div class='register'>
                 <Link to='/' className='goback' style={{ textDecoration: 'none' }}>Volver</Link>
            <div className='register-card'>
            <form action="#" onSubmit={handleSubmit}>
                <div className="log-text">
                    Registration
                </div>
                <div className="form-group d-flex align-items-center">
                    <div className="icon">
                        <span className="far fa-user"></span>
                    </div>{" "}
                    <input
                        autocomplete="off"
                        type="text"
                        placeholder="Name"
                        name="name"
                        onChange={handleChangeNombre}
                    />
                </div>
                <div className="form-group d-flex align-items-center">
                    <div className="icon">
                        <span class="far fa-envelope"></span>
                    </div>{" "}
                    <input
                        autocomplete="off"
                        type="email"
                        placeholder="Email"
                        name="email"
                        onChange={handleChangeEmail}
                    />
                </div>
                <div className="form-group d-flex align-items-center">
                    <div className="icon">
                        <span className="fas fa-key"></span>
                    </div>{" "}
                    <input
                        autocomplete="off"
                        type="password"
                        placeholder="Password"
                        name="password"
                        className='reg-pass'
                        onChange={handleChangePassword}
                    />
                </div>
                <input
                    type="submit"
                    value="Register"
                    className="register-btn"
                />
                {/* <div className="terms mb-2">
                    {" "}
                    By clicking "Signup", you acknowledge that you have read the{" "}
                    <a href="#">Privacy Policy</a> and agree to the{" "}
                    <a href="#">Terms of Service</a>.
                </div>
                <div className="connect border-bottom mt-4 mb-4"></div>
                <ul className="p-0 social-links">
                    <li>
                        <a href="#">
                            <span className="fab fa-facebook-f"></span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span className="fab fa-google"></span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span className="fab fa-github"></span>
                        </a>
                    </li>
                </ul> */}
            </form>
        </div>
        </div>
        </div>
    );
}
