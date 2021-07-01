import React from "react";
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'
import ProductList from '../components/ProductList'
import CarouselProducts from '../components/Carousel'

export default function Home() {
  return (
    <div className="Home">
        <Header/>
        <CarouselProducts/>
        <div className='body-home'>
          <Sidebar/>
          <ProductList/>
        </div>
        <Footer/>
    </div>
  );
}

