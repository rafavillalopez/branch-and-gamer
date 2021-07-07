/** @format */
import * as React from "react";
import { useDispatch } from "react-redux";
import { setProductos } from "../store/productos";
import axios from "axios";
import { ListGroup } from "react-bootstrap";
import "../assets/index.css";

export default function Sidebar() {
    
    const dispatch = useDispatch();

    const handleFilter = (item) => {
        axios
            .get(`/api/products?item=${item}`)
            .then((res) => res.data)
            .then((data) => {
                dispatch(setProductos(data));
            });
    };

    return (
        <div className="sideBar">
            <ListGroup defaultActiveKey="">
                <ListGroup.Item className="categories">
                    <h5>Categorías</h5>
                </ListGroup.Item>
                <button
                    className="categories-item"
                    onClick={() => handleFilter("pc completa")}
                >
                    PCs completas
                </button>
                <button
                    className="categories-item"
                    onClick={() => handleFilter("notebook")}
                >
                    Laptops
                </button>
                <button
                    className="categories-item"
                    onClick={() => handleFilter("monitor")}
                >
                    Monitores
                </button>
                <button
                    className="categories-item"
                    onClick={() => handleFilter("teclado")}
                >
                    Teclados
                </button>
                <button
                    className="categories-item"
                    onClick={() => handleFilter("mouse")}
                >
                    Mouses
                </button>
                <button
                    className="categories-item"
                    onClick={() => handleFilter("procesador")}
                >
                    Procesadores
                </button>
                <button
                    className="categories-item"
                    onClick={() => handleFilter("mother")}
                >
                    Mothers
                </button>
                <button
                    className="categories-item"
                    onClick={() => handleFilter("ram")}
                >
                    RAMs
                </button>
                <button
                    className="categories-item"
                    onClick={() => handleFilter("fuente")}
                >
                    Fuentes
                </button>
                <button
                    className="categories-item"
                    onClick={() => handleFilter("auriculares")}
                >
                    Auriculares
                </button>
                <button
                    className="categories-item"
                    onClick={() => handleFilter("cable hdmi")}
                >
                    Cables y conectores
                </button>
                <button
                    className="categories-item"
                    onClick={() => handleFilter("impresora")}
                >
                    Impresoras
                </button>
            </ListGroup>
        </div>
    );
}


    
// const handleFilter = (categoryId) => {
//     let productArr = []
//      axios
//         .get(`/api/products?categoryId=${categoryId}`)
//         .then((res) => res.data)
//         .then((data) => { data.map(arrData => 
//             axios.get(`/api/products?id=${arrData.productId}`)
//             .then((datas) => productArr.push(datas.data)))
//             })
//             .then(() => aux())
//             .catch(err => console.log("ERROR: ",err))
// };

// const aux = (productArr) => {
//     // console.log("(Antes del dispatch) DATA Arr: ", productArr)
//     if(productArr[0]) {
//         console.log("(En dispatch) DATA Arr: ", productArr)
//         return dispatch(setProductos(productArr))
//     }
// }