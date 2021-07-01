import React from "react";
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'
import ProductList from '../components/ProductList'
import Carousel from '../components/Carousel'

export default function Home() {
  return (
    <div className="Home">
        <Header/>
        <Carousel/>
        <div className='body-home'>
          <Sidebar/>
          <ProductList/>
        </div>
        <Footer/>
    </div>
  );
}

