import * as React from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import Register from "./Register";
import "./register.css";

export default function Login() {
    return (
        <div>
            <div>
                <form action="#">
                    <div className="h5 font-weight-bold text-center mb-3">
                        Login
                    </div>
                    <div className="form-group d-flex align-items-center">
                        <div className="icon">
                            <span class="far fa-envelope"></span>
                        </div>{" "}
                        <input
                            autocomplete="off"
                            type="email"
                            className="form-control"
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
                            className="form-control"
                            placeholder="Password"
                            name="password"
                        />
                        <div className="icon btn">
                            <span className="fas fa-eye-slash"></span>
                        </div>
                    </div>
                    <input
                        type="submit"
                        value="Send"
                        className="btn btn-primary mb-3"
                    />
                    <h1> If you dont have an account click here!</h1>
                    <Link to="/register">
                        <button className="btn btn-primary mb-3">
                            Register!
                        </button>
                    </Link>
                </form>
            </div>
        </div>
    );
}
