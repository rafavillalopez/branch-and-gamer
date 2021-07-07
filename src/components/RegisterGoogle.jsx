/** @format */

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { Alert } from "react-bootstrap";

import { setRegister } from "../store/user";
import { Link, useHistory } from "react-router-dom";
import { setUser } from "../store/loggedUserReducer";
import { setGoogleTrue, setGooglefalse } from "../store/googleReducer";
import "../containers/App.css";

import { GoogleLogin, GoogleLogout } from "react-google-login";

const clientId =
  "1000128027001-1hm0fsrjmpmkldp3qeb8uvci632jp77i.apps.googleusercontent.com";

function RegisterGoogle() {
  const [showloginButton, setShowloginButton] = useState(true);
  const [showlogoutButton, setShowlogoutButton] = useState(false);
  const history = useHistory();

  let {usuario } = useSelector((state) => state.register);
  const dispatch = useDispatch();
  const onLoginSuccess = (res) => {
    console.log("Login Success:", res.profileObj);
    setShowloginButton(false);
    setShowlogoutButton(true);
   
    const value = {
      name: res.profileObj.givenName,
      email: res.profileObj.email,
      password: res.profileObj.googleId,
    };
    axios
      .post("/api/auth/register", value)
      .then((res) => res.data)
      .then(() => {
        return axios.post("/api/auth/login", value);
      })
      .then((res) => res.data)
      .then((data) => {
        window.localStorage.setItem("branchToken", `Bearer ${data.token}`);
        dispatch(setUser());
        dispatch(setGoogleTrue())
        history.push("/");
      })
      .catch((err) => {
        // setAlert(true);
        // setTimeout(() => setAlert(false), 1500);
        console.log(err);
      });
  };

  const onLoginFailure = (res) => {
    console.log("Login Failed:", res);
  };

  const onSignoutSuccess = () => {
    alert("You have been logged out successfully");
    console.clear();
    setShowloginButton(true);
    setShowlogoutButton(false);
    dispatch(setGooglefalse())

  };

  return (
    <div>
      {showloginButton ? (
        <GoogleLogin
          clientId={clientId}
          buttonText="Registrarme con Google"
          className="log-btn"
          onSuccess={onLoginSuccess}
          onFailure={onLoginFailure}
          cookiePolicy={"single_host_origin"}
          isSignedIn={true}
        />
      ) : null}

      {showlogoutButton ? (
        <GoogleLogout
          clientId={clientId}
          buttonText="Desloguearme"
          onLogoutSuccess={onSignoutSuccess}
          // onClick
        ></GoogleLogout>
      ) : null}
    </div>
  );
}
export default RegisterGoogle;
