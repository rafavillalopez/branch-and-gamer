import React, { useState } from "react";
import axios from "axios";
import { Alert } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { setUser } from "../store/loggedUserReducer";
import Navbar from './Navbar'

export default function Login() {
  const [alert, setAlert] = useState(false);
  const dispatch = useDispatch();
  const [value, setValue] = useState({ email: "", password: "" });
  const history = useHistory();

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
        window.localStorage.setItem("branchToken", `Bearer ${data.token}`);
        dispatch(setUser());
        history.push("/");
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
      <div className='register-card'>
        
        <form onSubmit={onSubmit}>
          <div className="log-text">Login</div>
          <div className="form-group d-flex align-items-center">
            <div className="icon">
              <span class="far fa-envelope"></span>
            </div>{" "}
            <input
              onChange={onChange}
              autoComplete="off"
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
              autoComplete="off"
              type="password"
              placeholder="Password"
              name="password"
            />
          </div>
          {alert && (
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
              Email o contraseña inválidos
            </Alert>
          )}
          <input type="submit" value="Login" className="log-btn" />
          <h6> ¿No tienes cuenta? ¡Click aquí!</h6>
          <Link to="/register">
            <button className="register-btn">Registrarme</button>
          </Link>
        </form>
      </div>
    </div>
    </div>
    </div>
  );
}
