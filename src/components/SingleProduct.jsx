import * as React from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";

export default function SingleProduct({ producto }) {
    return (
        <div>
            <h1>{producto.title}</h1>
            <h1>{producto.id}</h1>
            </div>
    );
}
