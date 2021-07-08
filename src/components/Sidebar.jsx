/** @format */
import * as React from "react";
import { useDispatch } from "react-redux";
import { setProductos } from "../store/productos";
import axios from "axios";
import { ListGroup } from "react-bootstrap";
import "../assets/index.css";

export default function Sidebar() {

    const dispatch = useDispatch();

    let [productState, setProductState] = React.useState([])

    const handleFilter = (categoryId) => {}

    return (
        <div className="sideBar">
            <ListGroup defaultActiveKey="">
                <ListGroup.Item className="categories">
                    <h5>Categorías</h5>
                </ListGroup.Item>
                <button
                    className="categories-item"
                    onClick={() => handleFilter(1)}
                >
                    PCs completas
                </button>
                <button
                    className="categories-item"
                    onClick={() => handleFilter(2)}
                >
                    Laptops
                </button>
                <button
                    className="categories-item"
                    onClick={() => handleFilter(3)}
                >
                    Monitores
                </button>
                <button
                    className="categories-item"
                    onClick={() => handleFilter(4)}
                >
                    Teclados
                </button>
                <button
                    className="categories-item"
                    onClick={() => handleFilter(5)}
                >
                    Mouses
                </button>
                <button
                    className="categories-item"
                    onClick={() => handleFilter(6)}
                >
                    Procesadores
                </button>
                <button
                    className="categories-item"
                    onClick={() => handleFilter(7)}
                >
                    Mothers
                </button>
                <button
                    className="categories-item"
                    onClick={() => handleFilter(8)}
                >
                    RAMs
                </button>
                <button
                    className="categories-item"
                    onClick={() => handleFilter(9)}
                >
                    Fuentes
                </button>
                <button
                    className="categories-item"
                    onClick={() => handleFilter(10)}
                >
                    Auriculares
                </button>
                <button
                    className="categories-item"
                    onClick={() => handleFilter(11)}
                >
                    Cables y conectores
                </button>
                <button
                    className="categories-item"
                    onClick={() => handleFilter(12)}
                >
                    Impresoras
                </button>
            </ListGroup>
        </div>
    );
}
