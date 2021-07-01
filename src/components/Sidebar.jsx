/** @format */
import * as React from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { setProductos, buscarProducto } from "../store/productos";
import axios from "axios";
import { ListGroup } from "react-bootstrap";
import "../assets/index.css"

export default function Sidebar() {

  const dispatch = useDispatch();

  const handleFilter = (item) => {
    axios
      .get(`/api/products?item=${item}`)
      .then((res) => res.data)
      .then((data) => {
          dispatch(setProductos(data));
      });
  }

  return (
    <div className="sideBar">
      <ListGroup defaultActiveKey="">
        <ListGroup.Item className='categories'>
         <h5 >Categorías</h5>
        </ListGroup.Item>
        <button className='categories-item' onClick={() => handleFilter('pc')}>
          PCs completas
        </button>
        <button className='categories-item' onClick={() => handleFilter('laptop')}>
          Laptops
        </button>
        <button className='categories-item' onClick={() => handleFilter('monitor')}>
          Monitores
        </button>
        <button className='categories-item' onClick={() => handleFilter('teclado')}>
          Teclados
        </button>
        <button className='categories-item' onClick={() => handleFilter('mouse')}>
          Mouses
        </button>
        <button className='categories-item' onClick={() => handleFilter('componente')}>
          Componentes
        </button>
        <button className='categories-item' onClick={() => handleFilter('auriculares')}>
          Auriculares
        </button>
        <button className='categories-item' onClick={() => handleFilter('conector')}>
          Cables y conectores
        </button>
        <button className='categories-item' onClick={() => handleFilter('inmpresora')}>
          Impresoras
        </button>
        <button className='categories-item' onClick={() => handleFilter('tablet')}>
          Tablets
        </button>
        <button className='categories-item' onClick={() => handleFilter('otro')}>
          Otros
        </button>
      </ListGroup>
    </div>
  );
}