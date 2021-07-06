import * as React from "react";
import { Link } from "react-router-dom";
import Table from "react-bootstrap/Table";
import { getProductFromDbAndSetQuantities } from "../utils";
import { useSelector, useDispatch } from "react-redux";
import { setCarritoItemsVacio } from "../store/cartReducer";
import { setCarritoUsuario } from "../store/setCarReducer";
import { setOrdenActual } from "../store/ordenActual";

export default function OrdenActual() {
    const dispatch = useDispatch();
    let { cartItems } = useSelector((state) => state);
    const [itemsToRender, setItemsToRender] = React.useState([]);

    React.useEffect(() => {
        getProductFromDbAndSetQuantities(cartItems).then((dbproducts) => {
            setItemsToRender(dbproducts);
        });
    }, [cartItems]);

    //ESTO ESTA MAL , (Por que borra los items del estado pero no del BACK )
    const setEstado = () => {
        dispatch(setOrdenActual()).then(() => {
            dispatch(setCarritoItemsVacio());
        });
    };

    return (
        <div>
            <br />
            <div className="about">
                <h5>
                    Gracias por tu compra! <br />
                    Aca estan todos los productos que compraste
                </h5>
                <p>
                    <br />
                    <br />
                    <Table striped bordered hover variant="blue">
                        <thead>
                            <tr>
                                <th>Cantidad</th>
                                <th>Producto</th>
                                <th>Precio</th>
                            </tr>
                        </thead>
                        <tbody>
                            {itemsToRender.length
                                ? itemsToRender.map((producto) => {
                                      return (
                                          <tr>
                                              <td>{producto.quantity}</td>
                                              <td>
                                                  <p>
                                                      {`${producto.title} ${producto.marca}`}
                                                  </p>
                                              </td>
                                              <td>{producto.price}</td>
                                          </tr>
                                      );
                                  })
                                : ""}
                        </tbody>
                    </Table>
                </p>
                <Link
                    to="/"
                    className="goback"
                    style={{ textDecoration: "none", paddingBottom: "8px" }}
                    onClick={setEstado}
                >
                    ¡OK!
                </Link>
            </div>
        </div>
    );
}
