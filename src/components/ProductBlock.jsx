import * as React from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

export default function ProductBlock({ producto }) {

    return (
        <div className='product-block'>
        <Link to= {`/productos/${producto.id}`}>
            <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={`${producto.imageUrl}`} />
            <Card.Body>
            <Card.Title>{producto.title}</Card.Title>
            <Card.Text>
                 {producto.marca}
            </Card.Text>
            <Button variant="primary">Comprar</Button>
            </Card.Body>
            </Card>
            {/* <h4>{producto.title}</h4>
            <h1>{producto.marca}</h1>
            <h1>{producto.price}</h1>
            <img src={`${producto.imageUrl}`} /> */}
        </Link>
    </div>
    );
}
