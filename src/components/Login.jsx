import * as React from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from '../components/Footer'
import "./register.css";

export default function Login() {
    return (
        <div>
            <div>
            <Navbar/>
        <div class='register'>
            <Link to='/' className='goback' style={{ textDecoration: 'none' }}>Volver</Link>
        <div className='register-card'>
            <div>
                <form action="#">
                    <div className="log-text">
                        Login
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
                        />
                        
                    </div>
                    <input
                        type="submit"
                        value="Login"
                        className="log-btn"
                    />
                    <h7> Don't have an account? Click here!</h7>
                    <Link to="/register">
                        <button className="register-btn">
                            Register!
                        </button>
                    </Link>
                </form>
            </div>
        </div>
        </div>
        </div>
        <Footer />
        </div>
    );
}
