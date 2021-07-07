import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import InfoUsuario from "./InfoUsuario";
import Historial from "./Historial";
import { Link, useHistory } from "react-router-dom";
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
    }, []);

    return (
        <div>
            <br />
            <Link to="/" className="goback" style={{ textDecoration: "none" }}>
                Volver
            </Link>
            <div className="container">
                <h1 className="mt-4">Mi perfil</h1>
                {capitalizeUser ? (
                    <h2 className="mt-4">
                        Hola,{" "}
                        {capitalizeUser.charAt(0).toUpperCase() +
                            capitalizeUser.slice(1)}
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
                            {activeSection === "Info De Usuario" ? (
                                <InfoUsuario />
                            ) : null}
                            {activeSection === "Historial De Compra" ? (
                                <Historial />
                            ) : null}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PerfilPanel;
