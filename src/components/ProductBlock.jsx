import * as React from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";

export default function ProductBlock({ producto }) {
    return (
        <div >
            <h1>{producto.title}</h1>
            <h1>{producto.marca}</h1>
            <h1>{producto.price}</h1>
            <img src={`${producto.imageUrl}`} />
        </div>
    );
}
