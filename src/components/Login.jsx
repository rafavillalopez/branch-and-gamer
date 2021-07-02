import React, { useState } from "react";
import axios from "axios";
import { Alert } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { setToken } from "../store/user";
import Navbar from "./Navbar";
import Footer from "../components/Footer";
import "./register.css";

export default function Login() {
    const [alert, setAlert] = useState(false);
    const dispatch = useDispatch();
    const [value, setValue] = useState({ email: "", password: "" });
    const History = useHistory();
    let userLog = useSelector((state) => state.loggedUser);

    const onChange = ({ target }) => {
        setValue((value) => {
            return {
                ...value,
                [target.name]: target.value,
            };
        });
    };

    const onSubmit = (e) => {
        e.preventDefault();
        axios
            .post("/api/auth/login", value)
            .then((res) => res.data)
            .then((data) => {
                dispatch(setToken(data.token));
                window.localStorage.setItem(
                    "branchToken",
                    `Bearer ${data.token}`
                );
                History.push("/");
            })
            .catch((err) => {
                setAlert(true);
                setTimeout(() => setAlert(false), 1500);
            });
    };

    return (
        <div>
            <div>
                <Navbar />
                <div class="register">
                    <Link
                        to="/"
                        className="goback"
                        style={{ textDecoration: "none" }}
                    >
                        Volver
                    </Link>
                    <div className="register-card">
                        <div>
                            <form onSubmit={onSubmit}>
                                <div className="log-text">Login</div>
                                <div className="form-group d-flex align-items-center">
                                    <div className="icon">
                                        <span class="far fa-envelope"></span>
                                    </div>{" "}
                                    <input
                                        onChange={onChange}
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
                                        onChange={onChange}
                                        autocomplete="off"
                                        type="password"
                                        placeholder="Password"
                                        name="password"
                                    />
                                </div>
                                {true && (
                                    <Alert
                                        style={{
                                            borderRadius: "30px",
                                            fontSize: "12px",
                                            height: "12px",
                                            paddingTop: 0,
                                            paddingBottom: "17px",
                                        }}
                                        variant={"danger"}
                                    >
                                        Email or password invalid
                                    </Alert>
                                )}
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
