import "./App.css";
import React from "react";
import ReactDOM from "react-dom";
import { Route, Switch, Redirect } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Register from "../components/Register";
import Login from "../components/Login";
import ProductBlock from "../components/ProductBlock";
import ProductList from "../components/ProductList";
import SingleProduct from "../components/SingleProduct";
import Footer from "../components/Footer";
import Home from "../components/Home";
import Favorites from "../components/Favorites";
import Cart from "../components/Cart";
import User from "../components/User";
import { useSelector } from "react-redux";

function App() {
    let productos = useSelector((state) => state.productos);
    return (
        <div className="App">
            <Switch>
                {/* RUTAS PARA VER LA INFO DE UN SOLO PRODUCTO */}
                {productos.map((producto) => {
                    return (
                        <Route
                            exact
                            path={`/${producto.id}`}
                            render={() => {
                                return <SingleProduct producto={producto} />;
                            }}
                        />
                    );
                })}

                <Route exact path="/" component={Home} />
                <Route exact path="/Login" component={Login} />
                <Route exact path="/Register" component={Register} />
                <Route exact path="/Cart" component={Cart} />
                <Route exact path="/Favorites" component={Favorites} />
                <Route exact path="/Me" component={User} />
            </Switch>
        </div>
    );
}

export default App;
