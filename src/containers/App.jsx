import "./App.css";
import React from "react";
import { Route, Switch } from "react-router-dom";
import Register from "../components/Register";
import Login from "../components/Login";
import SingleProduct from "../components/SingleProduct";
import Home from "../components/Home";
import Favorites from "../components/Favorites";
import Cart from "../components/Cart";
import User from "../components/User";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import About from "../components/About";
import { useDispatch } from "react-redux";
import { setUser } from "../store/loggedUserReducer";
import AdminPanel from "../components/AdminPanel/index"

function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(setUser());
  }, [dispatch]);

  return (
    <>
      <Switch>
        <Route path="/products/:id" component={SingleProduct} />
        <Route exact path="/" component={Home} />
        <Route exact path="/Login" component={Login} />
        <Route exact path="/Register" component={Register} />
        <Route exact path="/Cart" component={Cart} />
        <Route exact path="/Favorites" component={Favorites} />
        <Route exact path="/Me" component={User} />
        <Route exact path="/Contact" component={Contact} />
        <Route exact path="/About" component={About} />

        <Route exact path="/Admin" component={AdminPanel} />
      </Switch>
    </>
  );
}

export default App;
