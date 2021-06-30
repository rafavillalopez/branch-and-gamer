import * as React from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export default function ProductBlock({ producto }) {
    return (
        <div className="product-block">
            <Card style={{ width: "18rem" }}>
                <Link to={`/${producto.id}`}>
                    <Card.Img variant="top" src={`${producto.imageUrl}`} />
                    <Card.Body>
                        <Card.Title>{producto.title}</Card.Title>
                        <Card.Text>{producto.marca}</Card.Text>
                    </Card.Body>
                </Link>
                <Button variant="primary">Comprar</Button>
            </Card>
        </div>
    );
}
