import React, { /* useEffect, */ useState } from "react";
import { useSelector } from "react-redux";
// import { useHistory } from "react-router";

import Usuario from "./Usuario";
import Productos from "./Productos";
import Categorias from "./Categorias";
import Ordenes from "./Ordenes";

const AdminPanel = () => {
  const [activeSection, setActiveSection] = useState("Usuarios");
  const adminSections = ["Usuarios", "Productos", "Categorias", "Ordenes"];

  const { loggedUser /* , isLogIn  */ } = useSelector((state) => state);
  const capitalizeUser = loggedUser ? loggedUser.name : null;

  //   const history = useHistory();

  const changeSection = (section) => {
    setActiveSection(section);
  };

  //   useEffect(() => {
  //     if (!loggedUser.isAdmin || !isLogIn) history.push("/");
  //   }, [history, isLogIn, loggedUser.isAdmin]);

  return (
    <div className="container">
      <h1 className="mt-4">Admin Panel</h1>
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
              {adminSections.map((e) => {
                return (
                  <div
                    className="col-3 d-flex justify-content-center align-items-center 
                                        admin-navbar-section "
                    onClick={() => changeSection(e)}
                  >
                    <p className="m-0">{e}</p>
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
            {activeSection === "Usuarios" ? <Usuario /> : null}
            {activeSection === "Productos" ? <Productos /> : null}
            {activeSection === "Categorias" ? <Categorias /> : null}
            {activeSection === "Ordenes" ? <Ordenes /> : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
