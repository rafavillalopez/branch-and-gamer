/** @format */

import * as React from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import "../assets/index.css";
import Carousel from "react-bootstrap/Carousel";

export default function CarouselProducts() {
  return (
    <div className="carouselContainer">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://photo-cdn2.icons8.com/I7xxF1JfDveT8EluYD5ApmX9igRELX8QG5ncs3NDtpA/rs:fit:1606:1072/Z3M6Ly9tb29zZTIv/YXNzZXRzL3NhdGEv/b3JpZ2luYWwvNjEy/L2QwOTQxNmU5LTM2/M2QtNDIyYS04YjMw/LTM0MmJiY2JhOWU5/YS5qcGc.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.pexels.com/photos/5489393/pexels-photo-5489393.jpeg?cs=srgb&dl=pexels-florenz-mendoza-5489393.jpg&fm=jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.pexels.com/photos/2883028/pexels-photo-2883028.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
