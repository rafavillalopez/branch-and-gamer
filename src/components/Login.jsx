import React, { useState } from "react";
import axios from "axios";
import { Alert } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import Register from "./Register";

import { setToken } from "../store/user";
import "./register.css";

export default function Login() {
  const [alert, setAlert] = useState(false);
  const dispatch = useDispatch();
  const [value, setValue] = useState({ email: "", password: "" });
  const History = useHistory();

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
        window.localStorage.setItem("branchToken", `Bearer ${data.token}`);
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
        <form onSubmit={onSubmit}>
          <div className="h5 font-weight-bold text-center mb-3">Login</div>
          <div className="form-group d-flex align-items-center">
            <div className="icon">
              <span class="far fa-envelope"></span>
            </div>{" "}
            <input
              onChange={onChange}
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
              onChange={onChange}
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
          <input type="submit" value="Send" className="btn btn-primary mb-3" />
          <h1> If you dont have an account click here!</h1>
          <Link to="/register">
            <button className="btn btn-primary mb-3">Register!</button>
          </Link>
        </form>
        {alert && <Alert variant={"danger"}>Email or password invalid</Alert>}
      </div>
    </div>
  );
}
