import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import InfoUsuario from "./InfoUsuario";
import Historial from "./Historial";
import { Link } from "react-router-dom";
import { setOrdenes } from "../../store/ordenesReducer";

const PerfilPanel = () => {
  const dispatch = useDispatch();
  const [activeSection, setActiveSection] = useState("Info De Usuario");
  const perfilSections = ["Info De Usuario", "Historial De Compra"];

  const user = useSelector((state) => state.loggedUser);
  const capitalizeUser = user ? user.name : null;

  const changeSection = (section) => {
    setActiveSection(section);
  };

  React.useEffect(() => {
    dispatch(setOrdenes());
  }, [dispatch]);

  return (
    <div>
      <br />
      <Link to="/" className="goback" style={{ textDecoration: "none" }}>
        <svg
          class="svg-icon"
          viewBox="0 0 20 20"
          style={{ color: "black", width: "25px" }}
        >
          <path
            fill="none"
            d="M18.271,9.212H3.615l4.184-4.184c0.306-0.306,0.306-0.801,0-1.107c-0.306-0.306-0.801-0.306-1.107,0
	L1.21,9.403C1.194,9.417,1.174,9.421,1.158,9.437c-0.181,0.181-0.242,0.425-0.209,0.66c0.005,0.038,0.012,0.071,0.022,0.109
	c0.028,0.098,0.075,0.188,0.142,0.271c0.021,0.026,0.021,0.061,0.045,0.085c0.015,0.016,0.034,0.02,0.05,0.033l5.484,5.483
	c0.306,0.307,0.801,0.307,1.107,0c0.306-0.305,0.306-0.801,0-1.105l-4.184-4.185h14.656c0.436,0,0.788-0.353,0.788-0.788
	S18.707,9.212,18.271,9.212z"
          ></path>
        </svg>
      </Link>
      <div className="container">
        <h1 className="mt-4">Mi perfil</h1>
        {capitalizeUser ? (
          <h2 className="mt-4">
            Hola,{" "}
            {capitalizeUser.charAt(0).toUpperCase() + capitalizeUser.slice(1)}
          </h2>
        ) : (
          <></>
        )}

        <div className="admin-content mt-4 mb-4">
          <div className="row admin-navbar-container ">
            <div className="col-12 admin-navbar p-0">
              <div className="row h-100 m-0">
                {perfilSections.map((e) => {
                  return (
                    <div
                      className="col-6 d-flex justify-content-center align-items-center 
                                        admin-navbar-section "
                      onClick={() => changeSection(e)}
                    >
                      <p className="m-0">{e}</p>
                      {/* {adminSections === {e} ? <span className="navbar-active" ></span> : null} */}
                      {activeSection === e ? (
                        <span className="navbar-active"></span>
                      ) : null}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="col-12 admin-section-container ">
            <div className="p-3">
              {activeSection === "Info De Usuario" ? <InfoUsuario /> : null}
              {activeSection === "Historial De Compra" ? <Historial /> : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerfilPanel;
