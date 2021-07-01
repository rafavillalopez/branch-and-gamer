import * as React from "react";

export default function Carousel() {
    
    return (
        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
            <div className="carousel-item active">
            <img className="d-block w-100" src="https://www.nvidia.com/content/dam/en-zz/Solutions/geforce/ces/strip-banner/geforce-amp-banners-laptops-strip-1024-t@2x-esla.jpg" alt="First slide"/>
            </div>
            <div className="carousel-item">
            <img className="d-block w-100" src="https://www.custompc.ie/media/catalog/category/9thGenBanner_1.jpg" alt="Second slide"/>
            </div>
            <div className="carousel-item">
            <img className="d-block w-100" src="https://cdn.wccftech.com/wp-content/uploads/2012/08/ax1200i-Banner.png" alt="Third slide"/>
            </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
        </a>
        </div>
    );
}


