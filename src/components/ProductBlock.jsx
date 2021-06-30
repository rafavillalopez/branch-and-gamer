import * as React from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

export default function ProductBlock({ producto }) {

    return (
        <div className='product-block'>
                <Card style={{ width: "18rem" }}>
                    <Link to= {`/productos/${producto.id}`}>
                        <Card.Img className='card-img' variant="top" src={`${producto.imageUrl}`} />
                        <Card.Title className='card-title'>{producto.title}</Card.Title>
                        <Card.Body className='card-body'>
                        <Card.Text>{producto.marca}</Card.Text>
                        </Card.Body>
                    </Link>
                    <div className='block-btns'>
                        <Button className='buy-btn' variant="primary">Comprar</Button>
                        <button type='submit' className='fav-btn'>♥️</button>
                    </div>
                </Card>
                {/* <h4>{producto.title}</h4>
                <h1>{producto.marca}</h1>
                <h1>{producto.price}</h1>
                <img src={`${producto.imageUrl}`} /> */}
             </div>
    );
}
