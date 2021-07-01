import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import axios from 'axios'

export default function ProductBlock({ producto}) {

    const user = useSelector(state => state.login)

    let formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      })

    const handleBuy = () => {
        axios
            .post(`/api/products?productId=${producto.id}&userId=${user.id}`)
            .then((res) => res.data)
            console.log("Buy: ", producto)
    }

    const handleFav = () => {
        axios
            .post(`/api/products?productId=${producto.id}`)
            .then((res) => res.data)
            console.log("Fav: ", producto)
    }

    return (
        <div className='product-block'>
            <Card style={{ width: "18rem"}}>
                <Link style={{ textDecoration: 'none' }} to= {`/${producto.id}`}>
                    <Card.Img className='card-img' variant="top" src={`${producto.imageUrl}`} />
                    <br/>
                    <br/>
                    <Card.Title className='card-title'>{producto.title}</Card.Title>
                    <Card.Text className='card-title'>{producto.marca}</Card.Text>
                </Link>
                <h3 className='price'>{formatter.format(producto.price)}</h3>
                <div className='block-btns'>
                    <Button className='buy-btn' variant="primary" onClick={handleBuy}>Comprar</Button>
                    <button type='submit' className='fav-btn'onClick={handleFav}>♥️</button>
                </div>
            </Card>
        </div>
    );
}
