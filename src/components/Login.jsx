import * as React from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import Register from "./Register";

export default function Login() {
    return (
        <div>
            <h1>Login</h1>

            <h1> If you dont have an account click here!</h1>
            <Link to="/register">
                <button>Register!</button>
            </Link>
        </div>
    );
}
