import React from "react";
import ReactDOM from "react-dom";
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import ProductBlock from '../components/ProductBlock'
import Footer from '../components/Footer'
import ProductList from '../components/ProductList'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="Home">
        <Header/>
        <Sidebar/>
        <ProductList/>
        <Footer/>
      <h1>Home</h1>
    </div>
  );
}

